/**
 * JS library: Text Limit
 * Require jQuery to run
 * Free to use and edit with this doc
 * Contact me for help: progettialessandro@gmail.com
 */
$(function(){$("[maxlength]").each(function(t){$this=$(this),$this.after('<span class="maxlength"><span>'+$this.attr("maxlength")+"</span></span>"),"TEXTAREA"==$this.prop("tagName")&&$this.next().addClass("afterTextarea")})}),$(document).on("focus","[maxlength]",function(t){$this=$(this),$this.next().addClass("active")}).on("focusout","[maxlength]",function(t){$this=$(this),$this.next().removeClass("active")}).on("keyup","[maxlength]",function(t){$this=$(this);var n=$this.attr("maxlength"),s=$this.val().length;s>n&&console.log("Troppe lettere"),$this.next().find("span").html(n-s)}).on("click",".maxlength",function(t){$this=$(this),$this.prev().focus()});
