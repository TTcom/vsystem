
export const heightTransition = {
    functional:true,
    render:function (h, ctx) {
        var data = {
            on:{
                enter:function (el, done) {
                    el.style.height = 'auto';
                    let endWidth = window.getComputedStyle(el).height;
                    el.style.height = '0px';
                    el.offsetHeight // force repaint
                    el.style.height = endWidth;
                },
                afterEnter:function(el){
                    el.style.height = null;
                },
                
                leave:function (el, done) {
                    el.style.height = window.getComputedStyle(el).height;
                    el.offsetHeight // force repaint
                    el.style.height = '0px';
                },
                afterLeave:function(el){
                    el.style.height = null;
                },
            }
        }
        return h('transition', data, ctx.children)
    }
}