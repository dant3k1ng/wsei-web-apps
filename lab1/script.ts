class InputApp{
    num1: HTMLInputElement;
    num2: HTMLInputElement;
    num3: HTMLInputElement;
    num4: HTMLInputElement;

    sum: HTMLInputElement;
    avg: HTMLInputElement;
    min: HTMLInputElement;
    max: HTMLInputElement;

    constructor(){
        this.start();
    }

    start(){
        this.GetInputValue();
        this.Listeners();
    }
    
    GetInputValue() {
        this.num1 = document.querySelector('#num1');
        this.num2 = document.querySelector('#num2');
        this.num3 = document.querySelector('#num3');
        this.num4 = document.querySelector('#num4');  

        this.sum = document.querySelector('#sum');
        this.avg = document.querySelector('#avg');
        this.min = document.querySelector('#min');
        this.max = document.querySelector('#max');
    }

    Listeners(){
        this.num1.addEventListener('input', () => this.DoMathAndFIll());
        this.num2.addEventListener('input', () => this.DoMathAndFIll());
        this.num3.addEventListener('input', () => this.DoMathAndFIll());
        this.num4.addEventListener('input', () => this.DoMathAndFIll());
    }

    DoMathAndFIll(){
        let val1 = +this.num1.value;
        let val2 = +this.num1.value;
        let val3 = +this.num1.value;
        let val4 = +this.num1.value;

        let sumary = val1 + val2 + val3 + val4;
        let average = sumary / 4;
        let minimum = Math.min(val1, val2, val3, val4);
        let maximum = Math.max(val1, val2, val3, val4);

        this.sum.value = sumary.toString();
        this.avg.value = average.toString();
        this.min.value = minimum.toString();
        this.max.value = maximum.toString();
    }
}

let start = new InputApp();