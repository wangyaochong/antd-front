import {connect} from 'dva';
 function DvaTest(props) {
  return (
    <div>
      <h1>Page index</h1>
	  <Button type="primary"
		onClick={()=>props.dispatch({
			type:'info/change',
			payload:{
				age:props.age-1
			}
		})}
	  >设置年龄</Button>
	  <h2>{props.name}</h2>
	  <h2>{props.age}</h2>
	  <h2>{props.des}</h2>
	  <Button type="primary"
		onClick={()=>props.dispatch({
			type:'info/getData',
			payload:{
				uid:19802,
				pagesize:50
			}
		})}
	  >获取数据</Button>
	  {
		  props.list.map((item)=>{
			  return(<div key={item.pid}>{item.pname}</div>)
		  })
	  }
    </div>
  );
}

export default connect(state=>state.info)(DvaTest)
