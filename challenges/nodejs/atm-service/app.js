const express = require("express");
const app = express();
app.use(express.json());

app.post("/withdrawal", (req, res) => {
  let amount = req.body.amount;
  let validNotes = req.body.validNotes;
  if (amount === undefined || !amount) {
    res.status(400).json("amount attribute is mandatory");
  } else if (!validNotes || validNotes === []) {
    res.status(400).json("validNotes attribute is mandatory");
  } else if (isFloat(amount) || !isInt(amount)) {
    res
      .status(400)
      .json("amount attribute must be an integer greater than zero");
  } else if (!isDesc(validNotes)) {
    res
      .status(400)
      .json("notes inside validNotes must be organized in descending order");
  } else if (containsFloats(validNotes)) {
    res
      .status(400)
      .json("validNotes can only contain integers greater than zero");
  } else {
    const notes = withdraw(amount, validNotes);
    if(notes.notes) {
      res.status(200).json(notes);
    }
    res.status(400).json(notes);
  }
});

const isInt = (n) => {
  return parseInt(n) === n && n > 0;
};

const isFloat = (n) => {
  return n === +n && n !== (n | 0);
};

const isDesc = (arr) => {
  let second_index;
  for (let first_index = 0; first_index < arr.length; first_index++) {
    second_index = first_index + 1;
    if (arr[second_index] - arr[first_index] > 0) return false;
  }
  return true;
};

const containsFloats = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (isFloat(arr[i])) return true;
  }
  return false;
};

const withdraw = (targ, notes) => {
  let idx = 0;
  let curValue = targ;
  let wNotes = [];

  for (let i = 0; i < notes.length; i++) {
    idx = i;
    while (curValue / notes[idx] >= 1) {
      curValue -= notes[idx];
      wNotes = [...wNotes, notes[idx]];
    }
  }
  return curValue > 0
    ? "Unavailable notes for that amount"
    : { notes: wNotes };
};

module.exports = app; 