
// export default function WithConsole (WrappedComponent) {
//     return {
//       mounted () {
//         console.log('I have already mounted')
//       },
//       methods:{
//         handelclick(){
//             console.log('handelclick')
//             console.log('handelclick',this.$listeners)
//             console.log('$attrs',this.$attrs)
//         }
//       },
//       render (h) {
//         return( 
//             <div>
//                { 
//                  h(WrappedComponent, {
//                     on: this.$listeners,
//                     attrs: this.$attrs,
//                  })
//                 }
//                 {h('h'+ 2,{
//                     on:{
//                       click:this.handelclick
//                     },
//                 },'一个动态标题')}

//             </div>
//         )
//       }
//     }
//   }

export default{
      mounted () {
        console.log('I have already mounted')
      },
      methods:{
        handelclick(){
            console.log('handelclick')
            console.log('handelclick',this.$listeners)
            console.log('$attrs',this.$attrs)
        }
      },
      render (h) {
        return( 
            <div>
                {h('h'+ 2,{
                    on:{
                      click:this.handelclick
                    },
                },'一个动态标题')}

            </div>
        )
      }
    }
  