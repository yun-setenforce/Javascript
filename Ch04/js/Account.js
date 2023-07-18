class Account{
    constructor(bank, id, name, balance){ ///생성자에 속성 선언, 초기화
        this.bank = bank;
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    ///클래스의 멤버함수 = 메서드. 함수가 아니므로 function 키워드 제거
    deposit(money){
        this.balance += money;
    }
    withdraw(money){
        this.balance -= money;
    }
    show(){
        document.write('<p>');
        document.write('은행명 : ' + this.bank +'<br>');
        document.write('계좌번호 : ' + this.id +'<br>');
        document.write('입금주 : ' + this.name +'<br>');
        document.write('현재잔액 : ' + this.balance +'<br>');
        document.write('</p>');
    }

}