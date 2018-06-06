// // import React, { Component } from 'react';
// // import { Route } from 'react-router-dom'
// // import ListContacts from './ListContacts';
// // import CreateContact from './CreateContact'
// // import * as ContactsAPI from './utils/ContactsAPI'
// //
// //
// // class App extends Component {
// //
// //   //向类中添加一个属性,使我们的app组件现在管理着这块状态
// //   state = {
// //     //screen: 'list',
// //     contacts : []
// //   }
// //
// //   //向组件添加一个生命周期事件(发出API请求)
// //   componentDidMount() {
// //     //调用ContactsAPI.getAll(),将返回一个Promise对象，然后我们调用
// //     //.then方法
// //     ContactsAPI.getAll().then((contacts) => {
// //       //调用this.setState然后传入contacts
// //       // this.setState{ contacts : contacts },键和值是相同的，可直接删掉值的部分
// //       this.setState({ contacts })
// //     })
// //   }
// //
// //
// //   //在组件类上创建一个方法，作用是：拿取被点击的特定联系人
// //   removeContact = (contact) => {
// //     //先删除其中的特定联系人，这么做的方式是：我们在React中更新本地组件状态的方式
// //     //且在此项目中，是根据以前的状态更新联系人
// //     this.setState((state) => ({
// //       //state.contacts将是我们状态的当前联系人数组
// //       //过滤掉状态上的联系人  状态联系人Id与被点击联系人ID不相等
// //       contacts: state.contacts.filter((c) => c.id !== contact.id)
// //     }))
// //     //此两种方案选择在于你是否需要根据当前状态更新状态,是则使用函数，不是则使用对象
// //     // this.setState({
// //     //
// //     // })
// //     //不仅从本地状态中删除了该联系人，还将向API发送请求从某处的数据库中删除它
// //     ContactsAPI.remove(contact)
// //   }
// //
// //   createContact(contact) {
// //     ContactsAPI.create(contact).then(contact => {
// //       this.setState(state => ({
// //         contacts: state.contacts.contact([ contact ])
// //       }))
// //     })
// //   }
// //
// //   render() {
// //     return (
// //       <div className='app'>
// //
// //       {/*{this.state.screen === 'list' && (
// //         <ListContacts
// //           contacts={this.state.contacts}
// //           onDeleteContact={this.removeContact}
// //           onNavigate={ () => {
// //             this.setState( {screen: 'create'} )
// //           }}
// //         />
// //       )}
// //
// //       {this.state.screen === 'create' && (
// //         <CreateContact/>
// //       )}*/}
// //         {/*我们想向ListContacts传递一些属性，使用这个render属性*/}
// //         <Route exact path='/' render={() => (
// //           <ListContacts
// //             contacts={this.state.contacts}
// //             onDeleteContact={this.removeContact}
// //           />
// //         )}/>
// //         {/*不用render，而用component这是配置Route的另外一种方式hey 帮我渲染这个组件*/}
// //         {/*<Route path='/create' component={CreateContact}/>*/}
// //         <Route path='/create' render={({ history }) => (
// //           <CreateContact
// //             onCreateContact={(contact) => {
// //               this.createContact(contact)
// //               history.push('/')
// //             }}
// //           />
// //         )}/>
// //       </div>
// //     )
// //   }
// // }
// //
// //  export default App;
// import React, { Component } from 'react';
// import { Route } from 'react-router-dom'
// import ListContacts from './ListContacts'
// import CreateContact from './CreateContact'
// import * as ContactsAPI from './utils/ContactsAPI'
//
// class App extends Component {
//   state = {
//     contacts: []
//   }
//   componentDidMount() {
//     ContactsAPI.getAll().then((contacts) => {
//       this.setState({ contacts })
//     })
//   }
//   removeContact = (contact) => {
//     this.setState((state) => ({
//       contacts: state.contacts.filter((c) => c.id !== contact.id)
//     }))
//
//     ContactsAPI.remove(contact)
//   }
//
//   createContact(contact) {
//     ContactsAPI.create(contact).then(contact => {
//       this.setState(state => ({
//         contacts: state.contacts.concat([ contact ])
//       }))
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <Route exact path='/' render={() => (
//           <ListContacts
//             onDeleteContact={this.removeContact}
//             contacts={this.state.contacts}
//           />
//         )}/>
//         <Route path='/create' render={({ history }) => (
//           <CreateContact
//             onCreateContact={(contact) => {
//               this.createContact(contact)
//               history.push('/')
//             }}
//           />
//         )}/>
//       </div>
//     )
//   }
// }
//
// export default App;
