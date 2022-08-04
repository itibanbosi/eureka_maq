enum direction {
    前,
    右,
    左,
    右_回転,
    左_回転,
    後,
    停止
}
enum 白黒 {
    黒,
    白,
}

enum lotation {
    左,
    右,
}

enum kyori {
    短い,
    長い,
}

//% color="#3943c6" weight=97 block="Eureka Maq" icon="\uf1b9"

namespace eureka_Maqueen {
    //% color="#3943c6" weight=70　blockId=moving1
    //% block="|%sinkou_houkou| へ |%time_sec|秒間,　速さ|%Power|で走る" group="1　基本の動き"
    //% Power.min=0 Power.max=255
    export function car_derection_time(sinkou_houkou: direction, time_sec: number, Power: number): void {
        switch (sinkou_houkou) {
            case direction.前:
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Power);
                basic.pause(time_sec * 1000);
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;


            case direction.左:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Power);
                basic.pause(time_sec * 1000);
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;
            case direction.右:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0);
                basic.pause(time_sec * 1000);
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;
            case direction.右_回転:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Power);
                basic.pause(time_sec * 1000);
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;
            case direction.左_回転:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Power);
                basic.pause(time_sec * 1000);
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;
            case direction.後:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Power);
                basic.pause(time_sec * 1000);
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;
            case direction.停止:
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;
        }
    }

    //% color="#3943c6" weight=70　blockId=moving2
    //% block="|%sinkou_houkou|へ,　速さ|%Power|で走る" group="1　基本の動き"
    //% Power.min=0 Power.max=255
    export function car_derection(sinkou_houkou: direction, Power: number): void {
        switch (sinkou_houkou) {
            case direction.前:
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Power);
                break;
            case direction.左:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Power);
                break;
            case direction.右:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0);
                break;
            case direction.右_回転:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Power);
                break;
            case direction.左_回転:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Power);
                break;
            case direction.後:
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Power);
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Power);
                break;
            case direction.停止:
                maqueen.motorStop(maqueen.Motors.All);
                basic.pause(100);
                break;
        }
    }
    //% color="#3943c6" weight=68　blockId=moving3
    //% block="左ﾀｲﾔ|%PowerL|の速さ,　右ﾀｲﾔ|%PowerR|の速さで走る" group="1　基本の動き"
    //% PowerL.min=0 Power.max=255
    //% PowerR.min=0 Power.max=255
    export function car_balance(PowerL: number, PowerR: number): void {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, PowerL);
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, PowerR)

    }





    //% color="#1E90FF" weight=51 blockId=wait_time1
    //% block="待ち時間 |%second|(秒) " group="1　基本の動き"
    export function wait_time1(second: number): void {
        basic.pause(second * 1000);
    }

    //% color="#009A00" weight=20 block="距離が |%limit|(cm)よりも |%nagasa| 時" group="3 超音波きょりｾﾝｻｰ"
    //% limit.min=5 limit.max=30
    export function sonar_ping_3(limit: number, nagasa: kyori,): boolean {
        switch (nagasa) {
            case kyori.短い:
                if (maqueen.Ultrasonic(PingUnit.Centimeters) < limit) {
                    return true;
                } else {
                    return false;
                }
                break;
            case kyori.長い:
                if (maqueen.Ultrasonic(PingUnit.Centimeters) < limit) {
                    return false;
                } else {
                    return true;
                }
                break;
        }
    }



    //% color="#009A00" weight=22 blockId=sonar_ping_2 block="超音波距離ｾﾝｻｰの値(cm)" group="3 超音波きょりｾﾝｻｰ"
    export function sonar_ping_2(): number {

        return maqueen.Ultrasonic(PingUnit.Centimeters);
    }


    //% color="#009A00" weight=21 blockId=sonar_ping_LED block="きょりを表示する" group="3 超音波きょりｾﾝｻｰ"
    export function sonar_ping_LED() {
        basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters));
    }



    //% color="#6041f1"  weight=23 block="右ﾗｲﾝｾﾝｻｰだけが |%wb| をふんだ時"  group="4 ﾗｲﾝｾﾝｻｰ"
    export function photo_R_out(wb: 白黒): boolean {
        switch (wb) {
            case 白黒.黒:
                if ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0)) {
                    return true;
                } else {
                    return false;
                }
                break;
            case 白黒.白:
                if ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1)) {
                    return true;
                } else {
                    return false;
                }
                break;
        }
    }


    //% color="#6041f1"  weight=24 block="左ﾗｲﾝｾﾝｻｰだけが |%wb| をふんだ時" group="4 ﾗｲﾝｾﾝｻｰ"
    export function photo_L_out(wb: 白黒): boolean {

        switch (wb) {
            case 白黒.黒:
                if ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1)) {
                    return true;
                } else {
                    return false;
                }
                break;
            case 白黒.白:
                if ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0)) {
                    return true;
                } else {
                    return false;
                }
                break;
        }
    }

    //% color="#6041f1"  weight=25 block="左右のﾗｲﾝｾﾝｻｰが両方 |%wb| をふんだ時" group="4 ﾗｲﾝｾﾝｻｰ"
    export function photo_LR_out(wb: 白黒): boolean {
        switch (wb) {
            case 白黒.黒:
                if ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0)) {
                    return true;
                } else {
                    return false;
                }
                break;
            case 白黒.白:
                if ((maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) && (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1)) {
                    return true;
                } else {
                    return false;
                }
                break;
        }
    }
    //% color="#f071bd" weight=30 block="|%RL|ﾗｲﾝｾﾝｻｰ" group="4 ﾗｲﾝｾﾝｻｰ"
    export function phto_R(RL:lotation) {
        switch (RL){
            case lotation.右:
                return maqueen.readPatrol(maqueen.Patrol.PatrolRight);
            case lotation.左:
                return maqueen.readPatrol(maqueen.Patrol.PatrolLeft);
        }
    }

    //% color="#009A00" weight=21 block="|%RL|ﾗｲﾝｾﾝｻｰの値を表示する" group="4 ﾗｲﾝｾﾝｻｰ"
    export function photoL_disp(RL:lotation) {
        switch(RL){
            case lotation.左:
                basic.showNumber(maqueen.readPatrol(maqueen.Patrol.PatrolLeft));
            case lotation.右:
                basic.showNumber(maqueen.readPatrol(maqueen.Patrol.PatrolRight));
        }
    }


    //% color="#009A00"  weight=81 blockId=microbit2_decideLight block="m:bit光ｾﾝｻ値 |%limit| より暗い" group="3 microbitの光ｾﾝｻ"
    //% limit.min=0 limit.max=100
    export function microbit2_decideLight(limit: number): boolean {
        if (input.lightLevel() / 254 * 100 < limit) {
            return true;
        } else {
            return false;
        }
    }



    //% color="#009A00"  weight=80 blockId=microbit2_denkitemp block="m:bit光ｾﾝｻ値" group="3 microbitの光ｾﾝｻ"
    export function microbit2_denkitemp(): number {

        return Math.round(input.lightLevel() / 254 * 100);

    }


    //% color="#228b22"  weight=82 blockId=microbit2_denkiLED block="m:bit光ｾﾝｻの値を表示する" group="3 microbitの光ｾﾝｻ"
    export function microbit2_denkiLED() {
        basic.showNumber(Math.round(input.lightLevel() / 254 * 100));
    }


}




