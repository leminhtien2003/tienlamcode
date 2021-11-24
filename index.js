const number1=$(".number")
const button1 = $(".in__out1")
let nguoilon = 0;
const button2 = $(".in__out2")
let nguoilon2 =0;

button1.click(function(){
  nguoilon++;
  number1.text(nguoilon)
})

button2.click(function(){
  nguoilon = 0
  number1.text(nguoilon2)
})