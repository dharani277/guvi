var ts0=document.createElement('ts0');
      ts0.style.color='red';
      ts0.appendChild(document.createTextNode('*'))
function tableCreate() {
  var body = document.getElementsByTagName('body')[0];
var d = document.createElement('div');
d.style.width = '80%';
d.style.height = '34px';
d.style.backgroundColor = 'brown';
body.appendChild(d);
var t=document.createElement('h5');
t.style.color="white";
t.style.textAlign='center';
t.style.lineHeight="1";
var t1=document.createElement('h5');
t1.style.color="white";
t1.style.textAlign='center';
t1.style.lineHeight="1";
t1.style.marginTop="-18px"
t.innerHTML='Request For New PAN Card Or/And Changes Or Correction in PAN Data';
t1.innerHTML='Fields marked with (asterisk) are mandatory. To avoid mistake(s), please refer guidelines and instructions';
d.appendChild(t);
d.appendChild(t1);
var tbl = document.createElement('table');
tbl.style.width = '80%';
tbl.style.height = '25px';
tbl.style.backgroundColor = 'lightgoldenrodyellow';
tbl.style.borderCollapse = 'collapse';
tbl.setAttribute('border', '1');
var tbdy = document.createElement('tbody');
for (var i = 0; i < 1; i++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < 1; j++) {
    if (i == 2 && j == 2) {
      break
    } else {
      var td= document.createElement('td');
      var ts=document.createElement('ts');
      var ts1=document.createElement('ts1');
      var ts2=document.createElement('ts2');
      var ts0=document.createElement('ts0');
      var te1=document.createElement('te1');
      te1.style.color='lightgoldenrodyellow';
      var te2=document.createElement('te2');
      te2.style.color='lightgoldenrodyellow';
      ts0.style.color='red';
      td.style.width='21px';
      td.appendChild(document.createTextNode(''))
      var radiobox = document.createElement('input');
      radiobox.type = 'radio';
      var radiobox1 = document.createElement('input');
      radiobox1.type = 'radio';
      ts0.appendChild(document.createTextNode('*'))
      te1.appendChild(document.createTextNode('------------'))
      te2.appendChild(document.createTextNode('-------'))
      ts.appendChild(document.createTextNode('Whether citizen of India'))
      ts1.appendChild(document.createTextNode('Yes'))
      ts2.appendChild(document.createTextNode('No'))
      i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
      tr.appendChild(td)
      tr.appendChild(ts0)
      tr.appendChild(ts)
      tr.appendChild(te1)
     tr.appendChild(ts1) 
tr .appendChild(radiobox);
tr.appendChild(te2)
tr.appendChild(ts2); 
tr.appendChild(radiobox1);
    }
  }
  tbdy.appendChild(tr);
}
tbl.appendChild(tbdy);
body.appendChild(tbl)
}
tableCreate();
function tableCreate1() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '25px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var ts0=document.createElement('ts0');
      ts0.style.color='red';
      ts0.appendChild(document.createTextNode('*'))
  var radiobox = document.createElement('input');
      radiobox.type = 'check';
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('Permanent Account Number (PAN)'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts0)
        tr.appendChild(ts)
        tr.appendChild(radiobox);
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate1();

function tableCreate2() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '80%';
    tbl.style.height = '25px';
    tbl.style.backgroundColor = 'lightgoldenrodyellow';
    tbl.style.borderCollapse = 'collapse';
    tbl.setAttribute('border', '1');
    var radiobox = document.createElement('input');
        radiobox.type = 'checkbox';
    var tbdy = document.createElement('tbody');
    var ts0=document.createElement('ts0');
        ts0.style.color='red';
        ts0.appendChild(document.createTextNode('*'))
    for (var i = 0; i < 1; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 1; j++) {
        if (i == 2 && j == 2) {
          break
        } else {
          var td= document.createElement('td');
          var ts=document.createElement('ts');
          td.style.width='21px';
          td.appendChild(document.createTextNode(''))
          ts.appendChild(document.createTextNode('1. Name'))
          i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
          tr.appendChild(td)
          tr.appendChild(ts0)
          tr.appendChild(ts)
          td.appendChild(radiobox)
        }
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
  }
tableCreate2();
function tableCreate3() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '25px';
  var radiobox = document.createElement('input');
      radiobox.type = 'radio';
      var radiobox1 = document.createElement('input');
      radiobox1.type = 'radio';
      var radiobox2= document.createElement('input');
      radiobox2.type = 'radio';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        var ts1=document.createElement('ts1');
        var ts2=document.createElement('ts2');
        var ts3=document.createElement('ts3');
        var ts4=document.createElement('ts4');
        var te1=document.createElement('te1');
      te1.style.color='lightgoldenrodyellow';
      var te2=document.createElement('te2');
      te2.style.color='lightgoldenrodyellow';
      var te3=document.createElement('te3');
      te3.style.color='lightgoldenrodyellow';
      var te4=document.createElement('te4');
      te4.style.color='lightgoldenrodyellow';
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        te1.appendChild(document.createTextNode('------------'))
      te2.appendChild(document.createTextNode('-------'))
      te3.appendChild(document.createTextNode('-------'))
      te4.appendChild(document.createTextNode('-------'))
        ts.appendChild(document.createTextNode('Title'))
        ts1.appendChild(document.createTextNode('Shri/Mr'))
        ts2.appendChild(document.createTextNode ('Smt./Mrs.'))
        ts3.appendChild(document.createTextNode('Kumari/Ms'))
        ts4.appendChild(document.createTextNode('M/s'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts)
        tr.appendChild(te1)
        tr.appendChild(ts1)
        tr.appendChild(radiobox)
        tr.appendChild(te2)
        tr.appendChild(ts2)
        tr.appendChild(radiobox1)
        tr.appendChild(te3)
        tr.appendChild(ts3)
        tr.appendChild(radiobox2)
        tr.appendChild(te4)
        tr.appendChild(ts4)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate3();


function tableCreate4() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '50px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var radiobox = document.createElement('input');
        radiobox.type = 'check';
        var radiobox1 = document.createElement('input');
        radiobox1.type = 'check';
        var radiobox2 = document.createElement('input');
        radiobox2.type = 'check';
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var t0= document.createElement('t0');
        var t1=document.createElement('t1');
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        var te1=document.createElement('te1');
        te1.style.color='lightgoldenrodyellow';
        var te2=document.createElement('te2');
        te2.style.color='lightgoldenrodyellow';
        var te3=document.createElement('te3');
        te3.style.color='lightgoldenrodyellow';
        var te4=document.createElement('te4');
        te4.style.color='lightgoldenrodyellow';
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        te1.appendChild(document.createTextNode('--------------------------------------------------'))
      te2.appendChild(document.createTextNode('--------------------------------------------------'))
      te3.appendChild(document.createTextNode('-------'))
      te4.appendChild(document.createTextNode('-------'))
        ts.appendChild(document.createTextNode('Last Name/Surname')) 
        t0.appendChild(document.createTextNode('First Name'))
        t1.appendChild(document.createTextNode('Middle Name '))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts)
        tr.appendChild(te1)
        tr.appendChild(t0)
        tr.appendChild(te2)
        tr.appendChild(t1)
        
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate4();


function tableCreate5() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '25px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var ts0=document.createElement('ts0');
      ts0.style.color='red';
      ts0.appendChild(document.createTextNode('*'))
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        var ts1=document.createElement('ts1');
        ts1.style.color='blue';
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('Name as you would like it printed on the card'))
        ts1.appendChild(document.createTextNode(' (Prefix like Shri, Smt, Kumari, Late, Dr, CA, Ms, Mr, Mrs, M/s, Alias etc. are not allowed)'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts0)
        tr.appendChild(ts)
        tr.appendChild(ts1)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate5();

function tableCreate6() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  var radiobox = document.createElement('input');
      radiobox.type = 'check';
  tbl.style.width = '80%';
  tbl.style.height = '23px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode(''))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts)
        tr.appendChild(radiobox);
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate6();

function tableCreate7() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '30px';
  
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        var ts1=document.createElement('ts1');
        td.style.width='21px';
        ts1.style.color='blue';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode(' Details of Parents.'))
        ts1.appendChild(document.createTextNode(' (Prefix like Shri, Smt, Kumari, Late, Dr, CA, Ms, Mr, Mrs, M/s, Alias etc. are not allowed.)'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts)
        tr.appendChild(ts1)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate7();
function tableCreate9() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '80%';
    tbl.style.height = '23px';
    tbl.style.backgroundColor = 'lightgoldenrodyellow';
    tbl.style.borderCollapse = 'collapse';
    tbl.setAttribute('border', '1');
    
        var radiobox1 = document.createElement('input');
        radiobox1.type = 'radio';
        var radiobox2 = document.createElement('input');
        radiobox2.type = 'radio';
        var ts0=document.createElement('ts0');
        ts0.style.color = 'lightgoldenrodyellow';
        ts0.appendChild(document.createTextNode('---'))
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 1; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 1; j++) {
        if (i == 2 && j == 2) {
          break
        } else {
          var td= document.createElement('td');
          var ts=document.createElement('ts');
          var ts1=document.createElement('ts1');
          var ts2=document.createElement('ts2');
          
          
          td.appendChild(document.createTextNode('Whether mother is single parent and you wish to apply for PAN by furnishing the name of your mother only'))
          ts1.appendChild(document.createTextNode('Yes'))
      
          ts2.appendChild(document.createTextNode('No'))
  
          i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
          
          tr.appendChild(ts0)
          tr.appendChild(td)
          
          tr.appendChild(ts)
          
          tr.appendChild(ts1)
          tr.appendChild(radiobox1)
          tr.appendChild(ts2)
          tr.appendChild(radiobox2)
        }
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
  }
tableCreate9();
function tableCreate10() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '25px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var radiobox = document.createElement('input');
      radiobox.type = 'checkbox';
  var tbdy = document.createElement('tbody');
  var ts0=document.createElement('ts0');
      ts0.style.color='red';
      ts0.appendChild(document.createTextNode('*'))
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        var ts1=document.createElement('ts1');
        td.style.width='21px';
        ts1.style.color='blue';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('Fathers Name'))
        ts1.appendChild(document.createTextNode('(Mandatory field.Even married women should give fathers name only.)'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts0)
        tr.appendChild(ts)
        td.appendChild(radiobox)
        tr.appendChild(ts1)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate10();
function tableCreate11() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '30px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('Last Name/Surname First Name Middle Name '))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate11();
function tableCreate12() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '25px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var radiobox = document.createElement('input');
      radiobox.type = 'checkbox';
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        ts.style.color='blue';
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('Mothers Name(This field is optional.)'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts)
        td.appendChild(radiobox)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate12();
function tableCreate49() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '30px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('Last Name/Surname First Name Middle Name '))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate49();
function tableCreate8() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '23px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
      var radiobox1 = document.createElement('input');
      radiobox1.type = 'radio';
      var radiobox2 = document.createElement('input');
      radiobox2.type = 'radio';
      var ts0=document.createElement('ts0');
      ts0.style.color='lightgoldenrodyellow';
      ts0.appendChild(document.createTextNode('----'))
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        var ts1=document.createElement('ts1');
        var ts2=document.createElement('ts2');
        var ts3=document.createElement('ts3');
        ts3.style.color='blue';
        td.appendChild(document.createTextNode('4. Select Parent name which is to be printed on the card'))
        ts3.appendChild(document.createTextNode('(In case no option is provided then PAN card will be issued with father name)'))
        ts1.appendChild(document.createTextNode('Father Name'))
        ts2.appendChild(document.createTextNode('Mother Name'))

        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
       
        tr.appendChild(ts0)
        tr.appendChild(td)
        tr.appendChild(ts)
        td.appendChild(ts3)
        tr.appendChild(ts1)
        tr.appendChild(radiobox1)
        tr.appendChild(ts2)
        tr.appendChild(radiobox2)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate8();
function tableCreate13() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '30px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var radiobox = document.createElement('input');
      radiobox.type = 'checkbox';
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('5. Date of Birth/Incorporation/Agreement/Partnership or Trust Deed/Formation of Body of Individuals/ Association of Persons'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts0)
        tr.appendChild(ts)
        td.appendChild(radiobox)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate13();
function tableCreate14() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '80%';
    tbl.style.height = '23px';
    tbl.style.backgroundColor = 'lightgoldenrodyellow';
    tbl.style.borderCollapse = 'collapse';
    tbl.setAttribute('border', '1');
    var radiobox = document.createElement('input');
    radiobox.type = 'checkbox';
        var radiobox1 = document.createElement('input');
        radiobox1.type = 'radio';
        var radiobox2 = document.createElement('input');
        radiobox2.type = 'radio';
        var radiobox3 = document.createElement('input');
        radiobox3.type = 'radio';
        var radiobox2 = document.createElement('input');
        radiobox2.type = 'radio';
        var ts0=document.createElement('ts0');
        ts0.appendChild(document.createTextNode(''))
        var te=document.createElement('te');
          te.style.color='red';
          
    var tbdy = document.createElement('tbody');
    
    for (var i = 0; i < 1; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 1; j++) {
        if (i == 2 && j == 2) {
          break
        } else {
          var td= document.createElement('td');
          var ts1=document.createElement('ts1');
          var ts2=document.createElement('ts2');
          var ts3=document.createElement('ts3');
          var ts= document.createElement('ts');
          te.appendChild(document.createTextNode('*'))
          td.appendChild(document.createTextNode(''))
      ts.appendChild(document.createTextNode('6. Gender'))
          ts1.appendChild(document.createTextNode('Male'))
          ts2.appendChild(document.createTextNode('Female'))
          ts3.appendChild(document.createTextNode('TransGender'))
          i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
          
          tr.appendChild(ts0)
          ts0.appendChild(radiobox)
          td.appendChild(te)
          td.appendChild(ts)
          tr.appendChild(td)
          tr.appendChild(ts1)
          tr.appendChild(radiobox1)
          tr.appendChild(ts2)
          tr.appendChild(radiobox2)
          tr.appendChild(ts3)
          tr.appendChild(radiobox3)
        }
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
  }      
tableCreate14();
function tableCreate15() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '30px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var radiobox = document.createElement('input');
      radiobox.type = 'checkbox';
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('7. Photo Mismatch'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts)
        td.appendChild(radiobox);
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate15();
function tableCreate16() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '30px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var radiobox = document.createElement('input');
      radiobox.type = 'checkbox';
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('8. Signature Mismatch'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts)
        td.appendChild(radiobox);
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate16();
function tableCreate17() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '80%';
    tbl.style.height = '23px';
    tbl.style.backgroundColor = 'lightgoldenrodyellow';
    tbl.style.borderCollapse = 'collapse';
    tbl.setAttribute('border', '1');
    var radiobox = document.createElement('input');
        radiobox.type = 'checkbox';
        var radiobox1 = document.createElement('input');
        radiobox1.type = 'radio';
        var radiobox2 = document.createElement('input');
        radiobox2.type = 'radio';
        var ts0=document.createElement('ts0');
        ts0.appendChild(document.createTextNode(''))
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 1; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 1; j++) {
        if (i == 2 && j == 2) {
          break
        } else {
          var td= document.createElement('td');
          var ts=document.createElement('ts');
          var ts1=document.createElement('ts1');
          var ts2=document.createElement('ts2');
          
          
          td.appendChild(document.createTextNode('9. Address for Communication'))
          ts1.appendChild(document.createTextNode('Residential'))
          ts2.appendChild(document.createTextNode('Office'))

          i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
          tr.appendChild(radiobox)
          tr.appendChild(ts0)
          tr.appendChild(td)
          
          tr.appendChild(ts)
          
          tr.appendChild(ts1)
          tr.appendChild(radiobox1)
          tr.appendChild(ts2)
          tr.appendChild(radiobox2)
        }
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
  }
  tableCreate17();
function tableCreate19() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '23px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  
      var radiobox1 = document.createElement('input');
      radiobox1.type = 'check';
      
      var ts0=document.createElement('ts0');
      ts0.style.color='lightgoldenrodyellow';
      ts0.style.width='400px';
      ts0.appendChild(document.createTextNode('-'))
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='400px';
        td.appendChild(document.createTextNode('Office Name (to be filled only in case of office address)'))
        
        ts.appendChild(document.createTextNode(''))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        
        tr.appendChild(ts0)
        tr.appendChild(td)
        
        tr.appendChild(ts)
        ts.appendChild(radiobox1)
        tr.appendChild(ts)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate19();
function tableCreate20() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '23px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  
      var radiobox1 = document.createElement('input');
      radiobox1.type = 'check';
      
      var ts0=document.createElement('ts0');
      ts0.style.color='lightgoldenrodyellow';
      ts0.style.width='400px';
      ts0.appendChild(document.createTextNode('-'))
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='400px';
        td.appendChild(document.createTextNode('Flat/Door/Block No.'))
        
        ts.appendChild(document.createTextNode(''))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        
        tr.appendChild(ts0)
        tr.appendChild(td)
        
        tr.appendChild(ts)
        ts.appendChild(radiobox1)
        tr.appendChild(ts)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate20();
function tableCreate21() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '23px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  
      var radiobox1 = document.createElement('input');
      radiobox1.type = 'check';
      
      var ts0=document.createElement('ts0');
      ts0.style.color='lightgoldenrodyellow';
      ts0.style.width='400px';
      ts0.appendChild(document.createTextNode('-'))
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='400px';
        td.appendChild(document.createTextNode('Name of Premises/Building/Village'))
        
        ts.appendChild(document.createTextNode(''))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        
        tr.appendChild(ts0)
        tr.appendChild(td)
        
        tr.appendChild(ts)
        ts.appendChild(radiobox1)
        tr.appendChild(ts)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate21();
function tableCreate22() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '23px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  
      var radiobox1 = document.createElement('input');
      radiobox1.type = 'check';
      
      var ts0=document.createElement('ts0');
      ts0.style.color='lightgoldenrodyellow';
      ts0.style.width='400px';
      ts0.appendChild(document.createTextNode('-'))
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='400px';
        td.appendChild(document.createTextNode('Road/Street/Lane/Post Office'))
        
        ts.appendChild(document.createTextNode(''))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        
        tr.appendChild(ts0)
        tr.appendChild(td)
        
        tr.appendChild(ts)
        ts.appendChild(radiobox1)
        tr.appendChild(ts)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate22();
function tableCreate23() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '23px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  
      var radiobox1 = document.createElement('input');
      radiobox1.type = 'check';
      
      var ts0=document.createElement('ts0');
      ts0.style.color='lightgoldenrodyellow';
      ts0.style.width='400px';
      ts0.appendChild(document.createTextNode('-'))
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='400px';
        td.appendChild(document.createTextNode('Area/Locality/Taluka/Sub-Division'))
        
        ts.appendChild(document.createTextNode(''))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        
        tr.appendChild(ts0)
        tr.appendChild(td)
        
        tr.appendChild(ts)
        ts.appendChild(radiobox1)
        tr.appendChild(ts)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate23();
function tableCreate18() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '23px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  
      var radiobox1 = document.createElement('input');
      radiobox1.type = 'check';
      
      var ts0=document.createElement('ts0');
      ts0.style.color='lightgoldenrodyellow';
      ts0.style.width='400px';
      ts0.appendChild(document.createTextNode('-'))
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='400px';
        td.appendChild(document.createTextNode('Town/City/District'))
        
        ts.appendChild(document.createTextNode(''))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        
        tr.appendChild(ts0)
        tr.appendChild(td)
        
        tr.appendChild(ts)
        ts.appendChild(radiobox1)
        tr.appendChild(ts)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate18();
function tableCreate24() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '30px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var radiobox = document.createElement('input');
      radiobox.type = 'check';
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        
        var td= document.createElement('td');
        var ts=document.createElement('ts');
td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('State/Union Territory'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts)
        tr.appendChild(radiobox);
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate24();
function tableCreate25() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '23px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  
      var radiobox1 = document.createElement('input');
      radiobox1.type = 'check';
      
      var ts0=document.createElement('ts0');
      ts0.style.color='lightgoldenrodyellow';
      ts0.style.width='400px';
      ts0.appendChild(document.createTextNode('-'))
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='400px';
        td.appendChild(document.createTextNode('PIN (Indicating PIN is mandatory)'))
        
        ts.appendChild(document.createTextNode(''))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        
        tr.appendChild(ts0)
        tr.appendChild(td)
        
        tr.appendChild(ts)
        ts.appendChild(radiobox1)
        tr.appendChild(ts)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate25();

function tableCreate26() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '30px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var radiobox = document.createElement('input');
      radiobox.type = 'check';
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        
        var td= document.createElement('td');
        var ts=document.createElement('ts');
td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('Country'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts)
        tr.appendChild(radiobox);
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate26();
function tableCreate27() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '23px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  
      var radiobox1 = document.createElement('input');
      radiobox1.type = 'check';
      
      var ts0=document.createElement('ts0');
      ts0.style.color='lightgoldenrodyellow';
      ts0.style.width='400px';
      ts0.appendChild(document.createTextNode('-'))
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='400px';
        td.appendChild(document.createTextNode('Zip'))
        
        ts.appendChild(document.createTextNode(''))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        
        tr.appendChild(ts0)
        tr.appendChild(td)
        
        tr.appendChild(ts)
        ts.appendChild(radiobox1)
        tr.appendChild(ts)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate27();
function tableCreate28() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '30px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var radiobox = document.createElement('input');
      radiobox.type = 'checkbox';
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('10. If you desire to update your other address, give required details & Submit proof of other address also.'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts)
        td.appendChild(radiobox);
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate28();
function tableCreate29() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '30px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var radiobox = document.createElement('input');
      radiobox.type = 'check';
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('11. Telephone No. (Country code is compulsory)'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts0)
        tr.appendChild(ts)
        tr.appendChild(radiobox);
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate29();
function tableCreate30() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '23px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  
      var radiobox1 = document.createElement('input');
      radiobox1.type = 'check';
      
      var ts0=document.createElement('ts0');
      ts0.style.color='lightgoldenrodyellow';
      ts0.style.width='400px';
      ts0.appendChild(document.createTextNode('-'))
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='400px';
        td.appendChild(document.createTextNode('E-mail ID'))
        
        ts.appendChild(document.createTextNode(''))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        
        tr.appendChild(ts0)
        tr.appendChild(td)
        
        tr.appendChild(ts)
        ts.appendChild(radiobox1)
        tr.appendChild(ts)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate30();
       function tableCreate31() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '80%';
    tbl.style.height = '23px';
    tbl.style.backgroundColor = 'lightgoldenrodyellow';
    tbl.style.borderCollapse = 'collapse';
    tbl.setAttribute('border', '1');
    
        var radiobox1 = document.createElement('input');
        radiobox1.type = 'radio';
        var radiobox2 = document.createElement('input');
        radiobox2.type = 'radio';
        var ts0=document.createElement('ts0');
        ts0.style.color='lightgoldenrodyellow';
        ts0.appendChild(document.createTextNode('-'))
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 1; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < 1; j++) {
        if (i == 2 && j == 2) {
          break
        } else {
          var td= document.createElement('td');
          var ts=document.createElement('ts');
          var ts1=document.createElement('ts1');
          var ts2=document.createElement('ts2');
      td.appendChild(document.createTextNode('In case of a citizen of India, then'))
          ts1.appendChild(document.createTextNode('AADHAAR'))
      
          ts2.appendChild(document.createTextNode('EID'))
  
          i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
  
          tr.appendChild(ts0)
          tr.appendChild(td)
          
          tr.appendChild(ts)
          tr.appendChild(radiobox1)
          tr.appendChild(ts1)
          tr.appendChild(radiobox2)
          tr.appendChild(ts2)
          
        }
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
  }
tableCreate31();
function tableCreate32() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '30px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var radiobox = document.createElement('input');
      radiobox.type = 'check';
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('12. AADHAAR number:'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts0)
        tr.appendChild(ts)
        tr.appendChild(radiobox);
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate32();
function tableCreate33() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '30px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var radiobox = document.createElement('input');
      radiobox.type = 'check';
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('Name as per AADHAAR letter or as per the enrollment ID of Aadhaar application form'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts0)
        tr.appendChild(ts)
        tr.appendChild(radiobox);
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate33();

function tableCreate34() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '23px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  
      var radiobox1 = document.createElement('input');
      radiobox1.type = 'check';
      
      var ts0=document.createElement('ts0');
      ts0.style.color='lightgoldenrodyellow';
      ts0.style.width='400px';
      ts0.appendChild(document.createTextNode('-'))
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='400px';
        td.appendChild(document.createTextNode('13. GSTN'))
        
        ts.appendChild(document.createTextNode(''))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        
        tr.appendChild(ts0)
        tr.appendChild(td)
        
        tr.appendChild(ts)
        ts.appendChild(radiobox1)
        tr.appendChild(ts)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate34();
        
function tableCreate35() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '30px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var radiobox = document.createElement('input');
      radiobox.type = 'checkbox';
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='21px';
        td.appendChild(document.createTextNode(''))
        ts.appendChild(document.createTextNode('14. Mention other Permanent Account Numbers (PANs) If any, inadvertently allotted to you. Submit proof of surrendered PAN(s) along with the application.'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
        tr.appendChild(td)
        tr.appendChild(ts)
        td.appendChild(radiobox);
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate35();

function tableCreate36() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '30px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var radiobox = document.createElement('input');
      radiobox.type = 'check';
      var radiobox1 = document.createElement('input');
      radiobox1.type = 'check';
      
      var ts0=document.createElement('ts0');
      ts0.style.color='lightgoldenrodyellow';
      ts0.style.width='400px';
      ts0.appendChild(document.createTextNode('-'))
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='400px';
        td.appendChild(document.createTextNode('PAN1'))
        
        ts.appendChild(document.createTextNode('PAN2'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        
        tr.appendChild(ts0)
        tr.appendChild(td)
        td.appendChild(radiobox)
        tr.appendChild(ts)
        ts.appendChild(radiobox1)
        tr.appendChild(ts)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate36();
function tableCreate37() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '80%';
  tbl.style.height = '30px';
  tbl.style.backgroundColor = 'lightgoldenrodyellow';
  tbl.style.borderCollapse = 'collapse';
  tbl.setAttribute('border', '1');
  var radiobox = document.createElement('input');
      radiobox.type = 'check';
      var radiobox1 = document.createElement('input');
      radiobox1.type = 'check';
      
      var ts0=document.createElement('ts0');
      ts0.style.color='lightgoldenrodyellow';
      ts0.style.width='21px';
      ts0.appendChild(document.createTextNode('-'))
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 1; j++) {
      if (i == 2 && j == 2) {
        break
      } else {
        var td= document.createElement('td');
        var ts=document.createElement('ts');
        td.style.width='400px';
        td.appendChild(document.createTextNode('PAN3'))
        
        ts.appendChild(document.createTextNode('PAN4'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        
        tr.appendChild(ts0)
        tr.appendChild(td)
        td.appendChild(radiobox)
        tr.appendChild(ts)
        ts.appendChild(radiobox1)
        tr.appendChild(ts)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate37();
function tableCreate38() {
var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '80%';
tbl.style.height = '30px';
tbl.style.backgroundColor = 'lightgoldenrodyellow';
tbl.style.borderCollapse = 'collapse';
tbl.setAttribute('border', '1');
var radiobox = document.createElement('input');
    radiobox.type = 'check';
var tbdy = document.createElement('tbody');
for (var i = 0; i < 1; i++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < 1; j++) {
    if (i == 2 && j == 2) {
      break
    } else {
      var td= document.createElement('td');
      var ts=document.createElement('ts');
      td.style.width='21px';
      td.appendChild(document.createTextNode(''))
      ts.appendChild(document.createTextNode('15. Verification'))
      i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
      tr.appendChild(td)
      tr.appendChild(ts)
    }
  }
  tbdy.appendChild(tr);
}
tbl.appendChild(tbdy);
body.appendChild(tbl)
}
tableCreate38();
function tableCreate39() {
var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '80%';
tbl.style.height = '30px';
tbl.style.backgroundColor = 'lightgoldenrodyellow';
tbl.style.borderCollapse = 'collapse';
tbl.setAttribute('border', '1');
var radiobox = document.createElement('input');
    radiobox.type = 'check';
var tbdy = document.createElement('tbody');
for (var i = 0; i < 1; i++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < 1; j++) {
    if (i == 2 && j == 2) {
      break
    } else {
      
      var td= document.createElement('td');
      var ts=document.createElement('ts');
      td.style.width='21px';
      td.appendChild(document.createTextNode(''))
      ts.appendChild(document.createTextNode('I/We'))
      i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
      tr.appendChild(td)
      tr.appendChild(ts)
      tr.appendChild(radiobox);
    }
  }
  tbdy.appendChild(tr);
}
tbl.appendChild(tbdy);
body.appendChild(tbl)
}
tableCreate39();
function tableCreate40() {
var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '80%';
tbl.style.height = '30px';
tbl.style.backgroundColor = 'lightgoldenrodyellow';
tbl.style.borderCollapse = 'collapse';
tbl.setAttribute('border', '1');
var radiobox = document.createElement('input');
    radiobox.type = 'check';
var tbdy = document.createElement('tbody');
for (var i = 0; i < 1; i++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < 1; j++) {
    if (i == 2 && j == 2) {
      break
    } else {
      var td= document.createElement('td');
      var ts=document.createElement('ts');
      td.style.width='21px';
      td.appendChild(document.createTextNode(''))
      ts.appendChild(document.createTextNode('Place'))
      i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
      tr.appendChild(td)
      tr.appendChild(ts)
      tr.appendChild(radiobox);
    }
  }
  tbdy.appendChild(tr);
}
tbl.appendChild(tbdy);
body.appendChild(tbl)
}
tableCreate40();
function tableCreate41() {
var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '80%';
tbl.style.height = '30px';
tbl.style.backgroundColor = 'lightgoldenrodyellow';
tbl.style.borderCollapse = 'collapse';
tbl.setAttribute('border', '1');

var tbdy = document.createElement('tbody');
for (var i = 0; i < 1; i++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < 1; j++) {
    if (i == 2 && j == 2) {
      break
    } else {
     
      var td= document.createElement('td');
      var ts=document.createElement('ts');
      td.style.width='21px';
      td.appendChild(document.createTextNode(''))
      ts.appendChild(document.createTextNode('DD MM YYYY verified today, the 18-04-2020'))
      i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
      tr.appendChild(td)
      tr.appendChild(ts)
     
    }
  }
  tbdy.appendChild(tr);
}
tbl.appendChild(tbdy);
body.appendChild(tbl)
}
tableCreate41();
function tableCreate42() {
var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '80%';
tbl.style.height = '30px';
tbl.style.backgroundColor = 'lightgoldenrodyellow';
tbl.style.borderCollapse = 'collapse';
tbl.setAttribute('border', '1');
var radiobox = document.createElement('input');
    radiobox.type = 'check';
var tbdy = document.createElement('tbody');
for (var i = 0; i < 1; i++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < 1; j++) {
    if (i == 2 && j == 2) {
      break
    } else {
      
      var td= document.createElement('td');
      var ts=document.createElement('ts');
      td.style.width='21px';
      td.appendChild(document.createTextNode(''))
      ts.appendChild(document.createTextNode('I/We have enclosed'))
      i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
      tr.appendChild(td)
      tr.appendChild(ts)
      tr.appendChild(radiobox);
    }
  }
  tbdy.appendChild(tr);
}
tbl.appendChild(tbdy);
body.appendChild(tbl)
}
tableCreate42();
function tableCreate43() {
var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '80%';
tbl.style.height = '30px';
tbl.style.backgroundColor = 'lightgoldenrodyellow';
tbl.style.borderCollapse = 'collapse';
tbl.setAttribute('border', '1');
var radiobox = document.createElement('input');
    radiobox.type = 'radio';
    var radiobox1 = document.createElement('input');
    radiobox1.type = 'radio';
var tbdy = document.createElement('tbody');
for (var i = 0; i < 1; i++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < 1; j++) {
    if (i == 2 && j == 2) {
      break
    } else {
      var td= document.createElement('td');
      var ts=document.createElement('ts');
      var ts1=document.createElement('ts1');
      var ts2=document.createElement('ts2');
      var ts3=document.createElement('ts3');
      td.style.width='21px';
      td.appendChild(document.createTextNode(''))
      ts.appendChild(document.createTextNode('Whether you wish to have?'))
      ts1.appendChild(document.createTextNode('Physical PAN Card & e-PAN Card'))
      ts2.appendChild(document.createTextNode('Only e-PAN Card'))
      ts3.appendChild(document.createTextNode('Fees Applicable'))
      i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
      tr.appendChild(td)
      tr.appendChild(ts)
      tr.appendChild(radiobox);
      tr.appendChild(ts1)
      tr.appendChild(radiobox1);
      tr.appendChild(ts2)
      tr.appendChild(ts3);
    }
  }
  tbdy.appendChild(tr);
}
tbl.appendChild(tbdy);
body.appendChild(tbl)
}
tableCreate43();
function tableCreate44() {
var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '80%';
tbl.style.height = '30px';
tbl.style.backgroundColor = 'lightgoldenrodyellow';
tbl.style.borderCollapse = 'collapse';
tbl.setAttribute('border', '1');
var tbdy = document.createElement('tbody');
for (var i = 0; i < 1; i++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < 1; j++) {
    if (i == 2 && j == 2) {
      break
    } else {
      var td=[];
      var td= document.createElement('td');
      var ts=document.createElement('ts');
      td.style.width='21px';
      td.appendChild(document.createTextNode(''))
      ts.appendChild(document.createTextNode('Other Details'))
      i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
      tr.appendChild(td)
      tr.appendChild(ts)
    }
  }
  tbdy.appendChild(tr);
}
tbl.appendChild(tbdy);
body.appendChild(tbl)
}
tableCreate44();
function tableCreate45() {
var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '80%';
tbl.style.height = '30px';
tbl.style.backgroundColor = 'lightgoldenrodyellow';
tbl.style.borderCollapse = 'collapse';
tbl.setAttribute('border', '1');

var tbdy = document.createElement('tbody');
for (var i = 0; i < 1; i++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < 1; j++) {
    if (i == 2 && j == 2) {
      break
    } else {
     
      var td= document.createElement('td');
      var ts=document.createElement('ts');
      td.style.width='21px';
      td.appendChild(document.createTextNode(''))
      ts.appendChild(document.createTextNode('1. Depository Account Details'))
      i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
      tr.appendChild(td)
      tr.appendChild(ts)
     
    }
  }
  tbdy.appendChild(tr);
}
tbl.appendChild(tbdy);
body.appendChild(tbl)
}
tableCreate45();
function tableCreate46() {
var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '80%';
tbl.style.height = '30px';
tbl.style.backgroundColor = 'lightgoldenrodyellow';
tbl.style.borderCollapse = 'collapse';
tbl.setAttribute('border', '1');
var radiobox = document.createElement('input');
    radiobox.type = 'check';
    var radiobox1 = document.createElement('input');
    radiobox1.type = 'check';
var tbdy = document.createElement('tbody');
for (var i = 0; i < 1; i++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < 1; j++) {
    if (i == 2 && j == 2) {
      break
    } else {
      var td= document.createElement('td');
      var ts=document.createElement('ts');
      var ts1=document.createElement('ts1');
      td.style.width='21px';
      td.appendChild(document.createTextNode(''))
      ts.appendChild(document.createTextNode('DP ID:'))
      ts1.appendChild(document.createTextNode('Client ID:'))
      i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
      tr.appendChild(td)
      tr.appendChild(ts)
      tr.appendChild(radiobox)
      tr.appendChild(ts1)
      tr.appendChild(radiobox1)
    }
  }
  tbdy.appendChild(tr);
}
tbl.appendChild(tbdy);
body.appendChild(tbl)
}
tableCreate46();
function tableCreate47() {
var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '80%';
tbl.style.height = '30px';
tbl.style.backgroundColor = 'lightgoldenrodyellow';
tbl.style.borderCollapse = 'collapse';
tbl.setAttribute('border', '1');
var tbdy = document.createElement('tbody');
for (var i = 0; i < 1; i++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < 1; j++) {
    if (i == 2 && j == 2) {
      break
    } else {
      var td= document.createElement('td');
      var ts=document.createElement('ts');
      td.style.width='21px';
      td.appendChild(document.createTextNode(''))
      ts.appendChild(document.createTextNode('2. Payment Details'))
      i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
      tr.appendChild(td)
      tr.appendChild(ts)
    }
  }
  tbdy.appendChild(tr);
}
tbl.appendChild(tbdy);
body.appendChild(tbl)
}
tableCreate47();
function tableCreate48() {
var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '80%';
tbl.style.height = '30px';
tbl.style.backgroundColor = 'lightgoldenrodyellow';
tbl.style.borderCollapse = 'collapse';
tbl.setAttribute('border', '1');
var radiobox = document.createElement('input');
    radiobox.type = 'radio';
var tbdy = document.createElement('tbody');
for (var i = 0; i < 1; i++) {
  var tr = document.createElement('tr');
  for (var j = 0; j < 1; j++) {
    if (i == 2 && j == 2) {
      break
    } else {

      var td= document.createElement('td');
      var ts=document.createElement('ts');
      td.style.width='10px';
      td.appendChild(document.createTextNode(''))
      ts.appendChild(document.createTextNode('Online Payment'))
      i == 1 && j == 1 ? td.setAttribute('rowSpan', '1') : null;
      td.appendChild(radiobox)
      tr.appendChild(td)
      tr.appendChild(ts)
    }
  }
  tbdy.appendChild(tr);
}
tbl.appendChild(tbdy);
body.appendChild(tbl)
}
tableCreate48();
function bottom(){
  var body = document.getElementsByTagName('body')[0];
  var d = document.createElement('div');
d.style.width = '80%';
d.style.height = '20px';
d.style.padding='2px'
d.style.backgroundColor = 'lightgoldenrodyellow';
body.appendChild(d);
  var td= document.createElement('td');
      var ts=document.createElement('ts');
      var ts1=document.createElement('ts1');
      var radiobox = document.createElement('input');
    radiobox.type = 'radio';
    var radiobox1 = document.createElement('input');
    radiobox1.type = 'radio';
      td.appendChild(document.createTextNode('For Paperless PAN Application :'))
      ts.appendChild(document.createTextNode('Yes'))
      ts1.appendChild(document.createTextNode('No'))
      d.appendChild(td)
      td.appendChild(radiobox)
      td.appendChild(ts)
      td.appendChild(radiobox1)
      td.appendChild(ts1)
}
bottom();
function bottom1(){
  var body = document.getElementsByTagName('body')[0];
  var d = document.createElement('div');
d.style.width = '80%';
d.style.height = '20px';
d.style.padding='2px';
d.style.backgroundColor = 'lightgoldenrodyellow';
body.appendChild(d);
      var ts=document.createElement('ts');
    
      var ts1=document.createElement('ts1');
      var radiobox = document.createElement('input');
    radiobox.type = 'radio';
      ts.appendChild(document.createTextNode('DSC Guidelines for DSC user'))
      d.appendChild(radiobox)
      radiobox.appendChild(ts1)
      d.appendChild(ts)
}
bottom1();
function bottom2(){
  var body = document.getElementsByTagName('body')[0];
  var d = document.createElement('div');
d.style.width = '80%';
d.style.height = '20px';
d.style.padding='2px';
d.style.backgroundColor = 'lightgoldenrodyellow';
body.appendChild(d);
  var td= document.createElement('td');
      var ts=document.createElement('ts');
      var ts1= document.createElement('ts1');
      var ts2=document.createElement('ts2');
      var t1= document.createElement('t1');
      var t2=document.createElement('t2');
      var t=document.createElement('t')
      var button = document.createElement("button");
      button.innerHTML = "Choose file";
      var button1 = document.createElement("button");
      button1.innerHTML = "Choose file";
      var radiobox = document.createElement('input');
      radiobox.type = 'radio';
    t.style.color='lightgoldenrodyellow';
    t1.style.color='lightgoldenrodyellow';
    t2.style.color='lightgoldenrodyellow';
      td.appendChild(document.createTextNode(' Upload Photo'))
      t.appendChild(document.createTextNode('-----------------------------------------'))
      ts.appendChild(document.createTextNode('No file chosen'))
      t1.appendChild(document.createTextNode('------------------------'))
      ts1.appendChild(document.createTextNode('Upload Signature'))
      t2.appendChild(document.createTextNode('--------'))
      ts2.appendChild(document.createTextNode('No file chosen'))
      d.appendChild(td)
      td.appendChild(t)
      td.appendChild(button)
      td.appendChild(ts)
      td.appendChild(t1)
      td.appendChild(ts1)
      td.appendChild(t2)
      td.appendChild(button1)
      td.appendChild(ts2)
}
bottom2();
function bottom3(){
  var body = document.getElementsByTagName('body')[0];
  var d = document.createElement('div');
d.style.width = '80%';
d.style.height = '20px';
d.style.padding='2px';
d.style.backgroundColor = 'lightgoldenrodyellow';
body.appendChild(d);
  var td= document.createElement('td');
      var ts=document.createElement('ts');
      var t=document.createElement('t');
      var button = document.createElement("button");
      button.innerHTML = "Choose file";
     
     t.style.color='lightgoldenrodyellow';
      td.appendChild(document.createTextNode(' Upload Document'))
      t.appendChild(document.createTextNode('-----------------------------------.'))
      ts.appendChild(document.createTextNode('No file chosen'))
      
      d.appendChild(td)
      td.appendChild(t)
      td.appendChild(button)
      td.appendChild(ts)
      
      
}
bottom3();
function bottom4(){
  var body = document.getElementsByTagName('body')[0];
  var d = document.createElement('div');
d.style.width = '80%';
d.style.height = '20px';
d.style.padding='2px';
d.style.backgroundColor = 'lightgoldenrodyellow';
body.appendChild(d);
  var td= document.createElement('td');
  var t2= document.createElement('t2');
  t2.style.color='lightgoldenrodyellow';
      var radiobox = document.createElement('input');
      radiobox.type = 'check';
    
      td.appendChild(document.createTextNode(' ALREADY UPLOADED PHOTO:'))
      t2.appendChild(document.createTextNode('---------------'))
      d.appendChild(td)
      td.appendChild(t2)
      td.appendChild(radiobox)
     
      
      
}
bottom4();
function bottom5(){
  var body = document.getElementsByTagName('body')[0];
  var d = document.createElement('div');
d.style.width = '80%';
d.style.height = '20px';
d.style.padding='2px';
d.style.backgroundColor = 'lightgoldenrodyellow';
body.appendChild(d);
  var td= document.createElement('td');
  var t2= document.createElement('t2');
  t2.style.color='lightgoldenrodyellow';
      var radiobox = document.createElement('input');
      radiobox.type = 'check';
    
      td.appendChild(document.createTextNode('ALREADY UPLOADED SIGNATURE:'))
      t2.appendChild(document.createTextNode('--------'))
      d.appendChild(td)
      td.appendChild(t2)
      td.appendChild(radiobox)
      
      
      
}
bottom5();
function bottom6(){
  var body = document.getElementsByTagName('body')[0];
  var d = document.createElement('div');
d.style.width = '80%';
d.style.height = '20px';
d.style.padding='2px';
d.style.backgroundColor = 'lightgoldenrodyellow';
body.appendChild(d);
  var td= document.createElement('td');
  var t2= document.createElement('t2');   
      var radiobox = document.createElement('input');
      radiobox.type = 'check';
      t2.style.color='lightgoldenrodyellow';
      td.appendChild(document.createTextNode('ALREADY UPLOADED DOCUMENTS:'))
      t2.appendChild(document.createTextNode('------'))
      d.appendChild(td)
      td.appendChild(t2)
      td.appendChild(radiobox)
     
      
      
}
bottom6();
function bottom7(){
  var body = document.getElementsByTagName('body')[0];
  var d = document.createElement('div');
d.style.width = '80%';
d.style.height = '20px';
d.style.padding='2px';
d.style.backgroundColor = 'lightgoldenrodyellow';
body.appendChild(d);
  var td= document.createElement('td');
     td.style.color='lightgoldenrodyellow';
      var button = document.createElement("button");
      button.innerHTML = "Submit";
      td.appendChild(document.createTextNode('--------------------------------------------------------------------'))
     d.appendChild(td)
     td.appendChild(button)
    }
    bottom7();
