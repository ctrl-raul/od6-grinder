'use strict';

(() => {


// I'll move the data to another file later, chill.


// Data

const levelToExperience = {
  "1": 0,
  "2": 100,
  "3": 200,
  "4": 500,
  "5": 1000,
  "6": 2000,
  "7": 3500,
  "8": 5300,
  "9": 7300,
  "10": 9700,
  "11": 13100,
  "12": 17500,
  "13": 22900,
  "14": 29500,
  "15": 37300,
  "16": 46350,
  "17": 56700,
  "18": 68400,
  "19": 81450,
  "20": 95850,
  "21": 111650,
  "22": 128900,
  "23": 147650,
  "24": 167900,
  "25": 189650,
  "26": 212950,
  "27": 237850,
  "28": 264400,
  "29": 292600,
  "30": 322450,
  "31": 354000,
  "32": 387300,
  "33": 422400,
  "34": 459300,
  "35": 498000,
  "36": 538550,
  "37": 581000,
  "38": 625400,
  "39": 671750,
  "40": 720050,
  "41": 770350,
  "42": 822700,
  "43": 877150,
  "44": 933700,
  "45": 992350,
  "46": 1053150,
  "47": 1116150,
  "48": 1181400,
  "49": 1248900,
  "50": 1318650,
  "51": 1390700,
  "52": 1465100,
  "53": 1541900,
  "54": 1621100,
  "55": 1702700,
  "56": 1786750,
  "57": 1873300,
  "58": 1962400,
  "59": 2054050,
  "60": 2148250,
  "61": 2245050,
  "62": 2344500,
  "63": 2446650,
  "64": 2551500,
  "65": 2659050,
  "66": 2769350,
  "67": 2882450,
  "68": 2998400,
  "69": 3117200,
  "70": 3238850,
  "71": 3363400,
  "72": 3490900,
  "73": 3621400,
  "74": 3754900,
  "75": 3891400,
  "76": 4030950,
  "77": 4173600,
  "78": 4319400,
  "79": 4468350,
  "80": 4620450,
  "81": 4775750,
  "82": 4934300,
  "83": 5096150,
  "84": 5261300,
  "85": 5429750,
  "86": 5601550,
  "87": 5776750,
  "88": 5955400,
  "89": 6137500,
  "90": 6323050,
  "91": 6512100,
  "92": 6704700,
  "93": 6900900,
  "94": 7100700,
  "95": 7304100,
  "96": 7511150,
  "97": 7721900,
  "98": 7936400,
  "99": 8154650,
  "100": 8376650,
  "101": 8602450,
  "102": 8832100,
  "103": 9065650,
  "104": 9303100,
  "105": 9544450,
  "106": 9789750,
  "107": 10039050,
  "108": 10292400,
  "109": 10549800,
  "110": 10811250,
  "111": 11076800,
  "112": 11346500,
  "113": 11620400,
  "114": 11898500,
  "115": 12180800,
  "116": 12467350,
  "117": 12758200,
  "118": 13053400,
  "119": 13352950,
  "120": 13656850,
  "121": 13965150,
  "122": 14277900,
  "123": 14595150,
  "124": 14916900,
  "125": 15243200,
  "126": 15574050,
  "127": 15909450,
  "128": 16249450,
  "129": 16594100,
  "130": 16943450,
  "131": 17297500,
  "132": 17656250,
  "133": 18019750,
  "134": 18388050,
  "135": 18761200,
  "136": 19139200,
  "137": 19522050,
  "138": 19909800,
  "139": 20302500,
  "140": 20700200,
  "141": 21102900,
  "142": 21510600,
  "143": 21923350,
  "144": 22341200,
  "145": 22764200,
  "146": 23192350,
  "147": 23625650,
  "148": 24064150,
  "149": 24507900,
  "150": 24956950,
  "151": 25169200,
  "152": 25557300,
  "153": 26059900,
  "154": 26655000,
  "155": 27330000,
  "156": 28076400,
  "157": 28887900,
  "158": 29759700,
  "159": 30687800,
  "160": 31669000,
  "161": 32700600,
  "162": 33780200,
  "163": 34905700,
  "164": 36075500,
  "165": 37287800,
  "166": 38541200,
  "167": 39834400,
  "168": 41166200,
  "169": 42535600,
  "170": 43941500,
  "171": 45383000,
  "172": 46859200,
  "173": 48369400,
  "174": 49912800,
  "175": 51488700,
  "176": 53096400,
  "177": 54735300,
  "178": 56404900,
  "179": 58104600,
  "180": 59833800,
  "181": 61592100,
  "182": 63379000,
  "183": 65194000,
  "184": 67036800,
  "185": 68906800,
  "186": 70803800,
  "187": 72727300,
  "188": 74676900,
  "189": 76652400,
  "190": 78653400,
  "191": 80679500,
  "192": 82730500,
  "193": 84806100,
  "194": 86906000,
  "195": 89029800,
  "196": 91177400,
  "197": 93348500,
  "198": 95542700,
  "199": 97760000,
  "200": 100000000,
  "201": 100565700,
  "202": 101600000,
  "203": 102939400,
  "204": 104525500,
  "205": 106324600,
  "206": 108313800,
  "207": 110476600,
  "208": 112800000,
  "209": 115273500,
  "210": 117888500,
  "211": 120637800,
  "212": 123515100,
  "213": 126514900,
  "214": 129632400,
  "215": 132863400,
  "216": 136203900,
  "217": 139650500,
  "218": 143200000,
  "219": 146849500,
  "220": 150596400,
  "221": 154438200,
  "222": 158372600,
  "223": 162397400,
  "224": 166510800,
  "225": 170710700,
  "226": 174995500,
  "227": 179363500,
  "228": 183813100,
  "229": 188343000,
  "230": 192951600,
  "231": 197637700,
  "232": 202400000,
  "233": 207237300,
  "234": 212148500,
  "235": 217132400,
  "236": 222188100,
  "237": 227314400,
  "238": 232510500,
  "239": 237775500,
  "240": 243108400,
  "241": 248508300,
  "242": 253974500,
  "243": 259506200,
  "244": 265102600,
  "245": 270763000,
  "246": 276486600,
  "247": 282272800,
  "248": 288120800,
  "249": 294030100,
  "250": 300000000,
};


// Elements

// Inputs
const levelIn = document.getElementById('level-in');
const expPercentIn = document.getElementById('exp-percent-in');
const runsPerDayIn = document.getElementById('runs-per-day-in');

// Outputs
const expOut = document.getElementById('exp-out');
const toLevelUpOut = document.getElementById('to-up-out');
const toLevel250Out = document.getElementById('to-250-out');
const runsPerDayOut = document.getElementById('runs-per-day-out');
const timeLeftOut = document.getElementById('time-left-out');
const finishDateOut = document.getElementById('finish-date-out');
const donePercentOut = document.getElementById('done-percent-out');


// Functions

function init () {

  levelIn.addEventListener('input', e => {
    e.target.value = clamp(1, 249, Math.abs(parseInt(e.target.value) || 0));
    update();
  });

  expPercentIn.addEventListener('input', e => {
    e.target.value = clamp(0, 100, Math.abs(parseFloat(e.target.value) || 0));
    update();
  });

  levelIn.addEventListener('input', e => {
    e.target.value = clamp(0, 15790, Math.abs(parseInt(e.target.value) || 0));
    update();
  });

  update();

}


function update () {

  const expFromMission = 19000;
  const millisecondsInDay = 86400000;

  const level = parseInt(levelIn.value);
  const expPercent = Number(expPercentIn.value);
  const runsPerDay = Number(runsPerDayIn.value);

  const thisLevelExp = levelToExperience[level];
  const nextLevelExp = levelToExperience[level + 1];
  const exp = thisLevelExp + (nextLevelExp - thisLevelExp) * expPercent / 100;
  const expToLevel250 = levelToExperience['250'] - exp;

  const runsNeeded = Math.ceil(expToLevel250 / expFromMission);
  const daysLeft = Math.ceil(runsNeeded / runsPerDay);
  const dateOfReaching = new Date(Date.now() + millisecondsInDay * daysLeft);
  const donePercent = exp / 3e8;


  expOut.textContent = addDecimalSeparators(exp);
  toLevelUpOut.textContent = addDecimalSeparators(levelToExperience[level + 1] - exp);
  toLevel250Out.textContent = addDecimalSeparators(expToLevel250);
  runsPerDayOut.textContent = addDecimalSeparators(runsPerDay);
  timeLeftOut.textContent = daysLeft;
  finishDateOut.textContent = dateOfReaching.toLocaleDateString();
  donePercentOut.textContent = parseFloat(donePercent.toFixed(2));
  donePercentOut.title = donePercent + '%';

}


function addDecimalSeparators (x, separator = '.') {

  const [ints, decimals] = Math.abs(x).toString().split('.');

  if (ints.length <= 3) {
    return x.toString();
  }
  
  let result = x < 0 ? '-' : '';

  for (let i = 0; i < ints.length; i++) {
    if (i && (ints.length - i) % 3 === 0) {
      result += separator;
    }
    result += ints[i];
  }

  if (decimals) {
    result += '.' + decimals;
  }

  return result;

}


function clamp (min, max, x) {
  return Math.max(min, Math.min(max, x));
}



// Init

init();



})();