export default {

   methods: {
    handelClick(){
        console.log("handelClick")
    }
   },
   render(h,ctx){
       console.log('ctx',ctx)
        let data = {
            on:{
               click:this.handelClick 
            }
        }
        return (
            <div >
                <h3 {...data}>123456</h3> 
                {this.$slots.default}
            </div>
        )
   

     }
}   