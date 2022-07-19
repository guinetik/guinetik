const app = require('../src/app');
const request = require('supertest');


async function makeRegularCreateRequest(requestBody, username = 'admin', password = 'admin') {
    return await request(app)
        .post('/user')
        .send(requestBody)
        .auth(username, password);
}

async function makeDeleteAllRequest() {
    return await request(app)
                .delete('/users')
                .auth('admin', 'admin');
}

describe("User Manager", () => {
    beforeEach(async () => {
        await makeDeleteAllRequest();
    });

    it("should be able to create a Manager", async () => {
        const requestBody = {
            username: "manager",
            password: "123",
            role: "manager",
        }

        const response = await makeRegularCreateRequest(requestBody);
        
        expect(response.status).toBe(201);               
        expect(response.body).not.toBe(null);
        expect(response.body.username).toBe("manager");
        expect(response.body.users.length).toBe(0);        
    });

    it("should not be able to create a Manager without authorization header", async () => {
        const requestBody = {
            username: "manager",
            password: "123",
            role: "manager",
        }

        const response = await request(app)
            .post('/user')
            .send(requestBody)

        expect(response.status).toBe(401);               
        expect(response.body).toEqual({message: "Unauthorized"});   
    });

    it("should not be able to create any user without all mandatory attributes", async () => {
        const requestBodyWithoutRole = {
            username: "manager",
            password: "123",
        }

        const requestBodyWithoutUsername = {
            username: "manager",
            password: "123",
        }

        const requestBodyWithoutPassword = {
            username: "manager",
            password: "123",
        }

        const response = await makeRegularCreateRequest(requestBodyWithoutRole);
        const secondResponse = await makeRegularCreateRequest(requestBodyWithoutUsername);
        const thirdResponse = await makeRegularCreateRequest(requestBodyWithoutPassword);
        
        expect(response.status).toBe(400);   
        expect(secondResponse.status).toBe(400);
        expect(thirdResponse.status).toBe(400);            
        expect(response.body).not.toBe(null);
        expect(response.body).toEqual({message: "Missing mandatory fields"});
        expect(secondResponse.body).toEqual({message: "Missing mandatory fields"});
        expect(thirdResponse.body).toEqual({message: "Missing mandatory fields"});
    });

    it("should be able to create a User inside a created Manager", async () => {
        const requestBody = {
            username: "manager",
            password: "123",
            role: "manager",
        }
        await makeRegularCreateRequest(requestBody);

        const anotherRequestBody = {
            username: "aUser",
            password: "123",
            role: "user",
        }

        const response = await makeRegularCreateRequest(anotherRequestBody, "manager", "123");
        
        expect(response.status).toBe(201);               
        expect(response.body).not.toBe(null);
        expect(response.body.username).toBe("aUser");
        expect(response.body.users.length).toBe(0);        
    });

    it("should not be able to create an admin user", async () => {
        const requestBody = {
            username: "admin",
            password: "123",
            role: "admin",
        }

        const response = await makeRegularCreateRequest(requestBody);
        
        expect(response.status).toBe(403);               
        expect(response.body).not.toBe(null);
        expect(response.body).toEqual({message: 'Forbidden'});
    });

    it("should be not be able to create two users with same username", async () => {
        const requestBody = {
            username: "manager",
            password: "123",
            role: "manager",
        }

        await makeRegularCreateRequest(requestBody);

        const anotherRequestBody = {
            username: "manager",
            password: "123",
            role: "user",
        }

        const response = await makeRegularCreateRequest(anotherRequestBody, "manager", "123");
        
        expect(response.status).toBe(409);               
        expect(response.body).not.toBe(null);
        expect(response.body).toEqual({message: "User Already Exists"});
    });

    it("should be not be able to create a manager, having the role of manager", async () => {
        const requestBody = {
            username: "manager",
            password: "123",
            role: "manager",
        }

        await makeRegularCreateRequest(requestBody);

        const anotherRequestBody = {
            username: "anotherManager",
            password: "123",
            role: "manager",
        }

        const response = await makeRegularCreateRequest(anotherRequestBody, "manager", "123");
        
        expect(response.status).toBe(403);               
        expect(response.body).not.toBe(null);
        expect(response.body).toEqual({message: "Forbidden operation"});
    });

    it("should be not be able to create a manager, having the role of user", async () => {
        const requestBody = {
            username: "regularUser",
            password: "123",
            role: "user",
        }

        await makeRegularCreateRequest(requestBody);

        const anotherRequestBody = {
            username: "anotherManager",
            password: "123",
            role: "manager",
        }

        const response = await makeRegularCreateRequest(anotherRequestBody, "regularUser", "123");
        
        expect(response.status).toBe(403);               
        expect(response.body).not.toBe(null);
        expect(response.body).toEqual({message: "Forbidden operation"});
    });

    it("should be not be able to create a user, having the role of user", async () => {
        const requestBody = {
            username: "regularUser",
            password: "123",
            role: "user",
        }

        await makeRegularCreateRequest(requestBody);

        const anotherRequestBody = {
            username: "anotherUser",
            password: "123",
            role: "user",
        }

        const response = await makeRegularCreateRequest(anotherRequestBody, "regularUser", "123");
        
        expect(response.status).toBe(403);               
        expect(response.body).not.toBe(null);
        expect(response.body).toEqual({message: "Forbidden operation"});
    });

    it("should be able to get the users related to the admin", async () => {
        const requestBody = {
            username: "manager",
            password: "123",
            role: "manager",
        }

        await makeRegularCreateRequest(requestBody);

        const anotherRequestBody = {
            username: "anotherUser",
            password: "123",
            role: "user",
        }

        await makeRegularCreateRequest(anotherRequestBody);

        const response = await request(app)
                               .get('/user')
                               .auth('admin', 'admin')
                               .expect('Content-Type', /json/)
        
        expect(response.status).toBe(200);               
        expect(response.body).not.toBe(null);
        expect(response.body.username).toEqual("admin")
        expect(response.body.role).toEqual("admin")
        expect(response.body.users.length).toBe(2);
        expect(response.body.users[0].username).toEqual("manager");
    });

    it("should not be able to get the users with wrong credentials", async () => {
        const requestBody = {
            username: "manager",
            password: "123",
            role: "manager",
        }

        await makeRegularCreateRequest(requestBody);

        const response = await request(app)
                               .get('/user')
                               .auth('admin', 'admin2')
                               .expect('Content-Type', /json/)
                               .expect(401);
        expect(response.body).toEqual({message: "Unauthorized"});
    });

    it("should be able to get the users of admin and users within manager after created", async () => {
        const requestBody = {
            username: "manager",
            password: "123",
            role: "manager",
        }

        await makeRegularCreateRequest(requestBody);

        const anotherRequestBody = {
            username: "anotherUser",
            password: "123",
            role: "user",
        }

        await makeRegularCreateRequest(anotherRequestBody, "manager", "123");

        const response = await request(app)
                               .get('/user')
                               .auth('admin', 'admin')
                               .expect('Content-Type', /json/)
        
        expect(response.status).toBe(200);               
        expect(response.body).not.toBe(null);
        expect(response.body.username).toEqual("admin")
        expect(response.body.role).toEqual("admin")
        expect(response.body.users.length).toBe(1);
        expect(response.body.users[0].users.length).toBe(1);
        expect(response.body.users[0].users[0].username).toBe("anotherUser");
    });

    it("should be able to get users within manager after created", async () => {
        const requestBody = {
            username: "manager",
            password: "123",
            role: "manager",
        }

        await makeRegularCreateRequest(requestBody);

        const anotherRequestBody = {
            username: "anotherUser",
            password: "123",
            role: "user",
        }

        await makeRegularCreateRequest(anotherRequestBody, "manager", "123");

        const response = await request(app)
                               .get('/user')
                               .auth('manager', '123')
                               .expect('Content-Type', /json/)
        
        expect(response.status).toBe(200);               
        expect(response.body).not.toBe(null);
        expect(response.body.username).toEqual("manager")
        expect(response.body.role).toEqual("manager")
        expect(response.body.users.length).toBe(1);
        expect(response.body.users[0].username).toBe("anotherUser");
        expect(response.body.users[0].role).toBe("user");
    });

    it("should be able to delete user created by a related manager", async () => {
        const requestBody = {
            username: "manager",
            password: "123",
            role: "manager",
        }

        await makeRegularCreateRequest(requestBody);

        const anotherRequestBody = {
            username: "anotherUser",
            password: "123",
            role: "user",
        }

        await makeRegularCreateRequest(anotherRequestBody, "manager", "123");

        await request(app)
            .delete('/user')
            .send({username: "anotherUser"})
            .auth('manager', '123')
            .expect(204);

        const response = await request(app)
                               .get('/user')
                               .auth('manager', '123')
                               .expect('Content-Type', /json/)
        
        expect(response.status).toBe(200);               
        expect(response.body).not.toBe(null);
        expect(response.body.username).toEqual("manager")
        expect(response.body.role).toEqual("manager")
        expect(response.body.users.length).toBe(0);
    });

    it("should be able to delete manager created, and user related should be delete as well", async () => {
        const requestBody = {
            username: "manager",
            password: "123",
            role: "manager",
        }

        await makeRegularCreateRequest(requestBody);

        const anotherRequestBody = {
            username: "anotherUser",
            password: "123",
            role: "user",
        }

        await makeRegularCreateRequest(anotherRequestBody, "manager", "123");

        await request(app)
            .delete('/user')
            .send({username: "manager"})
            .auth('admin', 'admin')
            .expect(204);

        const response = await request(app)
                               .get('/user')
                               .auth('admin', 'admin')
                               .expect('Content-Type', /json/)
        
        expect(response.status).toBe(200);               
        expect(response.body).not.toBe(null);
        expect(response.body.username).toEqual("admin")
        expect(response.body.role).toEqual("admin")
        expect(response.body.users.length).toBe(0);
    });

    it("should not be able to delete user if it was not created by related manager", async () => {
        const requestBody = {
            username: "manager",
            password: "123",
            role: "manager",
        }

        await makeRegularCreateRequest(requestBody);

        const anotherRequestBody = {
            username: "anotherUser",
            password: "123",
            role: "user",
        }

        await makeRegularCreateRequest(anotherRequestBody);

        await request(app)
            .delete('/user')
            .send({username: "anotherUser"})
            .auth('manager', '123')
            .expect(403);
    });

    it("should not be able to delete user if username was not provided", async () => {
        await request(app)
            .delete('/user')
            .auth('manager', '123')
            .expect(400);
    });

    it("should not be able to delete user as admin with wrong crendentials", async () => {
        const response = await request(app)
            .delete('/user')
            .send({username: "random"})
            .auth('admin', 'admin2')
            .expect(401);
        expect(response.body).toEqual({message: "Unauthorized"});
    });

    it("should not be able to delete all with other user that is not admin", async () => {
        const requestBody = {
            username: "manager",
            password: "123",
            role: "manager",
        }

        await makeRegularCreateRequest(requestBody);
        const response = await request(app)
            .delete('/users')
            .auth('manager', '123')
            .expect(401);
        expect(response.body).toEqual({message: "Unauthorized"});
    });

    it("should not be able to delete admin", async () => {
        const response = await request(app)
            .delete('/user')
            .send({username: 'admin'})
            .auth('admin', 'admin')
            .expect(403);
        expect(response.body).toEqual({message: 'Forbidden'});
    });
});