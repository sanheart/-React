import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListContacts1 from './ListContacts1'
import CreateContact1 from './CreateContact1'
import * as ContactsAPI from './utils/ContactsAPI'

// //需将这些联系人传递给我们即将创建的新组件，然后油该组件负责将它们实际显示给视图
// const contacts = [
//   {
//     "id": "ryan",
//     "name": "Ryan Florence",
//     "email": "ryan@reacttraining.com",
//     "avatarURL": "http://localhost:5001/ryan.jpg"
//   },
//   {
//     "id": "michael",
//     "name": "Michael Jackson",
//     "email": "michael@reacttraining.com",
//     "avatarURL": "http://localhost:5001/michael.jpg"
//   },
//   {
//     "id": "tyler",
//     "name": "Tyler McGinnis",
//     "email": "tyler@reacttraining.com",
//     "avatarURL": "http://localhost:5001/tyler.jpg"
//   }
// ]

class App1 extends Component {
  //将contacts移入组件中，由app组件来管理其状态，那么状态发生了改变React就会基于状态变化来更新用户界面
  state = {
    //需将这些联系人传递给我们即将创建的新组件，然后油该组件负责将它们实际显示给视图
    contacts : []
  }

  //想从 API 外部获取数据，应使用componentDidMount生命周期事件

  componentDidMount() {
  	//调用contactsAPI.getAll()，将返回一个 promise 对象，然后调用.then 方法
  	ContactsAPI.getAll().then((contacts) => {
  	  this.setState({
  	  	contacts: contacts
  	  })
  	} )
  }


  //1.在状态所在的位置写一个remove函数负责更新我们删除联系人的状态
  //2.然后将此函数放入props中并向下传递给listContacts
  //3.最后再我们的ListContacts组件中与删除按钮关联

  //调用该函数时，它将传递被点击的特定联系人，然后过滤状态上的当前联系人
  //即删除状态联系人ID与被点击联系人ID不相等的地方，从而获得一个全新的数组
  //然后我们传递给setState的，从reducer函数返回的对象将与当前状态合并
  removeContact = (contact) => {
    //拿取要删除的contact，再更新状态
    //方法一：向它传递一个函数，此函数将返回一个全新的对象，它将与当前状态合并
    //判别：需要根据当前状态更新,即传入这个函数的第一个参数将是当前状态
    this.setState((state) => ({
      //返回一个新的联系人列表
      //state.contacts将是我们状态的当前联系人数组
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
    // //方法二：直接传递一个对象，此对象将与当前状态合并
    // //判别:不需要根据当前状态更新
    // this.setState({
    //
    // })

     //调用api 中的 remove方法更新后端数据库
    ContactsAPI.remove(contact)

  }

  render() {
    return (
      <div>
        {/*将contacts数组传递给ListContacts组件
           1.向ListContacts组件添加一个属性
           2.获取contacts数组，需从组件内部访问state属性，传递给该组件
           3.然后再该组件中访问此数组的方式：通过this.props访问
           4.最后又将该数组设置成状态，即通过this.state访问*/}
        {/*将removeContact传递给ListContacts组件 */}
        <Route exact path='/' render={() => (
            <ListContacts1 
            	onDeleteContact={this.removeContact} 
            	contacts={this.state.contacts}
             />
        )}/>
        <Route path='/create' component={CreateContact1}/>
      </div>
    )
  }
}
export default App1;
