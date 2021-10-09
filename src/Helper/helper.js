const reasonData = (data) => {
  var output = "";
  switch (data) {
    case 0:
      output = "REASON CLIENT";
      break;
    case 1:
      output = "REASON EXPERT";
      break;
    case 2:
      output = "REASON DEALER";
      break;
    case 3:
      output = "REASON SL";
      break;
    case 4:
      output = "REASON TP";
      break;
    case 5:
      output = "REASON SO";
      break;
    case 6:
      output = "REASON ROLLOVER";
      break;
    case 7:
      output = "REASON EXTERNAL CLIENT";
      break;
    case 8:
      output = "REASON VMARGIN";
      break;
    case 9:
      output = "REASON GATEWAY";
      break;
    case 10:
      output = "REASON SIGNAL";
      break;
    case 11:
      output = "REASON SETTLEMENT";
      break;
    case 12:
      output = "REASON TRANSFER";
      break;
    case 13:
      output = "REASON SYNC";
      break;
    case 14:
      output = "REASON EXTERNAL SERVICE";
      break;
    case 15:
      output = "REASON MIGRATION";
      break;
    case 16:
      output = "REASON MOBILE";
      break;
    case 17:
      output = "REASON WEB";
      break;
    case 18:
      output = "REASON SPLIT";
      break;
    default:
      break;
  }
  return output;
};

const entryData = (data) => {
  let output = "";
  switch (data) {
    case 0:
      output = "IN";
      break;
    case 1:
      output = "OUT";
      break;
    case 2:
      output = "IN OUT";
      break;
    case 3:
      output = "OUT BY";
      break;
    default:
      break;
  }
  return output;
};

export {reasonData, entryData}
