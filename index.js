// index.js

function superbowlWin(records) {
    const winRecord = records.find(record => record.result === "W");
    return winRecord ? winRecord.year : undefined;
  }
  
  module.exports = superbowlWin;
  