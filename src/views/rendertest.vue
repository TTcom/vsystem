<script>
export default {
  data () {
    return {
        value:'3523',
        data:[
            {name:'jack',age:12},
            {name:'peter',age:14},
            {name:'frank',age:13}
        ],
        fontSize:1,
    }
  },
  render(h){
           
           return (
             
               <div class="rendertest">

                {h('h'+ this.fontSize,'一个动态标题')}

                  <el-button type="primary" on-click={()=>{this.fontSize == 6 ? 6 : this.fontSize++}}>减小标题</el-button>
                  <el-button type="success" on-click={()=>{ if(this.fontSize<=1){return}else{this.fontSize--} }}>增大标题</el-button>
                    
               <div>
                <input v-model={this.value}  on-input={this.inputchange}/>
               </div>
               <div>
                沙发上帝国时代
                </div>
               <ul>
                 {
                     this.data.map((val,i)=>{

                      return (
                             <li style="font-size:15px;margin:20px 0;">
                                 <span>{val.name}</span>
                                 <span style="margin-left:50px">{val.age}</span>
                                 <span on-click={this.deletitem.bind(this,i)} style="margin-left:50px;color:red;cursor:pointer">删除</span>
                            </li>
                            )
                     })
                 }
                 
               </ul>

                <div>
                   <el-button type="primary" on-click={this.addData}>新增</el-button>
                </div>

               </div>
               
           )
   
  },
  methods: {
      deletitem(i){
              console.log(i);
              this.data.splice(i,1);
      }, 
      addData(){
            var result = '';
            
            for(var i=0;i<4;i++){
                var ranNum = Math.ceil(Math.random() * 25); //生成一个0到25的数字
               //大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
               result+=String.fromCharCode(65+ranNum);
           }
             this.data.push({
                 name:result,
                 age:Math.ceil(Math.random() * 100)
             })
      },
      inputchange(){
          console.log(this.value)
      }
  },
}
</script>
<style scoped>
</style>