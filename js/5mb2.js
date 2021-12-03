



// 인트로 화면과 메인 화면 구성
// 인트로 화면으로 전환
function showIntro() {
	displayHideId('main-5mbe');
	displayShowId('intro');
    stopCheckActive();
}

// 메인 화면으로 전환
function showMain() {
	displayHideId('intro');
	displayShowId('main-5mbe');
}

// 디스플레이 활성
function displayShowId(id) {
	getLId(id).style.display = 'block';
}
// 디스플레이 숨김
function displayHideId(id) {
	getLId(id).style.display = 'none';
}


// input들을 관리 - input에 들어가는 아이디를 통해 전체적으로 관리함
var inputIdList = [];
var inputCurrentId = 0;

// input 초기화
function setUpInput() {
    for (var i = 0; i < 5; i++) addInput();
}

// input 추가
function addInput() {
    inputIdList.push('input-'+(++inputCurrentId));
}

// input 삭제
function deleteInput(id) {
    var index = findIdInput(id);
    
}

function findIdInput(id) {
    for (var i = 0; i < inputIdList.length; i++) {
        if (inputIdList[i] === id) return i;
    }
    return -1;
}

// input들의 여러개의 데이터를 읽어옴
function readInputData() {
    var list = [];
    for (var i = 0; i < inputIdList.length; i++) {
        var data = readIdData(inputIdList[i]); 
        list.push(data);
    }
    return list;
}

// input들의 데이터를 저장
function saveInputData() {
    var memory = new ccMemory();
    var list = readInputData();
    
    memory.set(list);
}

// 데이터 읽기
function readIdData(id) {
    return getLId(id).value;
}

// 타이머 설정을 읽어옴
function readTimerSet() {
    var inhale = readIdData('inhale-time'), hold = stopTimeSet(), exhale = readIdData('exhale-time');
    var timer = {i: inhale, h: hold, e: exhale};
    return timer;
}

// stophale, stop-time control
function stopTimeSet() {
    return stopChecking() ? readIdData('stop-time') : 0;
}
function stopCheckActive() {
    if (stopChecking()) {
        getLId('stop-option').style.display = 'block';
    }
    else {
        getLId('stop-option').style.display = 'none';
    }
}
function stopChecking() {
    return getLId('stophale').checked;
}

function getLId(id) {
    return document.getElementById(id);
}

// 타이머 설정을 저장


// 숨쉬기 운동 시작
function start5MBE() {
    saveInputData();
    showMain();
}


// 타이머 제어
function timerControl() {
    
}



// 들숨 차례
function inhale() {
	modeStateChanger('들이쉬기');
	toCircle();
}

// 숨참기 차례
function hold() {
	modeStateChanger('숨참기');
}

// 날숨 차례
function exhale() {
	modeStateChanger('내쉬기');
	toEllipse();
}

/*
@keyframes hale {
	0%{width:100%;}
	46%{width:50%;}
	50%{width:50%;}
	96%{width:100%;}
	100%{width:100%;}
}
animation:hale cubic-bezier(0.425,0.250,0.595,0.785) 10s infinite;
*/

// 타원이 원형으로 변함
function toCircle() {
	getLId('lungs').style.width = 100 + '%';
}

// 원형이 타원으로 변함
function toEllipse() {
	getLId('lungs').style.width = 50 + '%';
}

// 숨쉬기 모드 상태 알림
function modeStateChanger(state) {
	getLId('brt-mode').innerHTML = state;
}



// 자막 표기
// 자막 input들의 값을 불러옴


// input들의 값을 자막 내용에 저장


// 자막 내용을 불러옴


// 자막 표시에 대한 결정을 계산






// 자막 내용을 표시
function ccDisplay(cc) {
	getLId('brt-cc').innerHTML = cc;
}


// 자막 내용을 숨김

























/*

데이터란 자막으로 표시하게 될 input의 데이터를 불러와 저장한다.
또한 데이터를 저장하고 이를 5분 내에 몇 번 반복을 할 것인지 계산한다.

1. 5분은 300초다.
2. 기본으로 설정된 타임의 값은 (5.5, 0, 5.5)다.
3. 그러므로 5.5초 동안의 한 자막은 5분동안 54번 반복된다.
4. 그리고 자막이 될 데이터의 갯수를 계산한다.
5. 데이터의 갯수가 27개라면 54/27=2이므로 27을 한 그룹으로 2번 반복한다.
5.1 데이터의 갯수가 3개면 54/3=18이므로 3개를 한 그룹으로 18번 반복된다.
5.2 데이터 갯수가 5개면 54/5=10.8이므로 5개를 한 그룹으로 묶어 11번 반복한다. (2.5초 추가됨)
5.3 데이터 갯수가 9개면 6번 반복된다.
5.4 데이터 갯수가 12개면 4.5다. 그러므로 29.7초동안 반복되므로 나머지 3초는 마무리로 아멘이 표시된다.
6. 
7. 
8. 
9. 


*/

var ccMemory = function() {
	var data = [];
	
    this.lenSet = function(len) {
        data = new Array(len);
    }
	this.set = function(arr) {
		if (!Array.isArray(arr)) {
			for (var i = 0; i < arr.length; i++) {
				data.push(arr[i]);
			}
		}
	}
	this.get = function() {
		return data;
	}
    
    this.push = function(str) {
        data.push(str);
    };
    this.shift = function() {
        return data.shift();
    };
    this.unshift = function(str) {
        data.unshift(str);
    }
    
}




/*
Timer class


*/
var brtTimer = function(i, h, e) {
	var inhale=i, hold=h, exhale=e;
	
	this.start = function() {
		
	};
	this.get = function() {
		return {inhale: i, hold: h, exhale: e};
	};
	this.update = function(i,h,e) {
		inhale = i;
		hold = h;
		exhale = e;
	};
}


// ex
var brt = new brtTimer(5.5, 0, 5.5);
brt.start();
brt.get();

















