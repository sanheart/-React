import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {

  //向类中添加一个属性,使我们的app组件现在管理着这块状态
  state = {
    contacts : [
     {
       "id": "ryan",
       "name": "Ryan Florence",
       "email": "ryan@reacttraining.com",
       "avatarURL": "http://localhost:5001/ryan.jpg"
     },
     {
       "id": "michael",
       "name": "Michael Jackson",
       "email": "michael@reacttraining.com",
       "avatarURL": "http://localhost:5001/michael.jpg"
     },
     {
       "id": "tyler",
       "name": "Tyler McGinnis",
       "email": "tyler@reacttraining.com",
       "avatarURL": "http://localhost:5001/tyler.jpg"
     }
   ]
  }

  //在组件类上创建一个方法，作用是：拿取被点击的特定联系人
  removeContact = (contact) => {
    //先删除其中的特定联系人，这么做的方式是：我们在React中更新本地组件状态的方式
    //且在此项目中，是根据以前的状态更新联系人
    this.setState((state) => ({
      //state.contacts将是我们状态的当前联系人数组
      //过滤掉状态上的联系人  状态联系人Id与被点击联系人ID不相等
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
    //此两种方案选择在于你是否需要根据当前状态更新状态,是则使用函数，不是则使用对象
    // this.setState({
    //
    // })
  }

  render() {
    return (
      <div>
        //获取contacts数组，将它传递给ListContacts组件
        <ListContacts
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts}
         />
      </div>
    );
  }
}

 export default App;
