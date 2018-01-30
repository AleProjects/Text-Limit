/**
 * JS library: Text Limit
 * Require jQuery to run
 * Free to use and edit with this doc
 * Contact me for help: progettialessandro@gmail.com
 */
$.fn.textLimit=function(){$this=$(this),$this.after('<span class="maxlength"><span>'+$this.attr("maxlength")+"</span></span>"),"TEXTAREA"==$this.prop("tagName")&&$this.next().addClass("afterTextarea")},$(document).on("focus","[maxlength]",function(t){$this=$(this),$this.next().addClass("active")}).on("focusout","[maxlength]",function(t){$this=$(this),$this.next().removeClass("active")}).on("keyup","[maxlength]",function(t){$this=$(this);var s=$this.attr("maxlength"),n=$this.val().length;n>s&&console.log("Troppe lettere"),$this.next().find("span").html(s-n)}).on("click",".maxlength",function(t){$this=$(this),$this.prev().focus()});