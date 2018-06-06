// //创建第一个组件，作用是：接收这些联系人并将它们显示在视图上
// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'
// //完成输入框筛选功能：需要向ListContacts组件引入状态，以跟踪输入字段的状态，但由于我们要引入状态，所以需要重构
// //此组件将从无状态函数组件变为类组件
// // function ListContacts(props) {
// //   return (
// //     <ol className='contact-list'>
// //       {props.contacts.map((contact) => (
// //         <li key={contact.id} className='contact-list-item'>
// //           <div className='contact-avatar' style={{
// //             backgroundImage: `url(${contact.avatarURL})`
// //           }}/>
// //           <div className='contact-details'>
// //             <p>{contact.name}</p>
// //             <p>{contact.email}</p>
// //           </div>
// //
// //           <button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>
// //             Remove
// //           </button>
// //         </li>
// //       ))}
// //     </ol>
// //   )
// // }
//
// //向无状态函数组件添加一个属性
//
//
//
// class ListContacts extends Component {
//   static propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired
//   }
//
//   state = {
//     query: ''
//   }
//
//   updateQuery = (query) => {
//
//     //String.prototype.trim()方法 会从一个字符串的两端删除空白字符，返回的是新字符串不影响原字符串
//     this.setState({ query: query.trim() })
//   }
//
//   clearQuery = () => {
//     this.setState({ query: ''})
//   }
//
//   render() {
//     //this.state.query与this.props.contacts出现过多，可拆分流 对象解构
//     const { contacts, onDeleteContact } = this.props
//     const { query } = this.state
//
//     let showingContacts
//
//     if(this.state.query) {
//       const match = new RegExp(escapeRegExp(query), 'i')
//       //RegExp.prototype.test() 如果正则表达式与指定的字符串匹配，返回true
//       //match.test('Tyler')
//       console.log(match)//输入t 则match= /t/i
//       showingContacts = contacts.filter((contact) => match.test(contact.name) )
//     } else {
//       showingContacts = contacts
//     }
//     //props是一个对象，拥有一个属性-contacts（存于App.js中的数组）
//     //console.log('Props', this.props);
//     return (
//       <div className='list-contacts'>
//       {/*{JSON.stringify(this.state)}*/}
//         <div className='List-contacts-top'>
//           <input
//             className='search-contacts'
//             type='text'
//             placeholder='Search contacts'
//             value={query}
//             onChange={(event) => this.updateQuery(event.target.value) }
//           />
//
//           {/*添加按钮控制应用显示不同页面(CreateContact)*/}
//           {/*<a
//             herf='#create'
//             onClick={ this.props.onNavigate }
//             className='add-contact'
//           >Add Contact</a>*/}
//           {/*会自动执行onClick*/}
//           <Link
//             to='/create'
//             className='add-contact'
//           >Add Contact</Link>
//         </div>
//           {/*显示通讯录条数*/}
//           { showingContacts.length !== contacts.length && (
//             <div className='showing-contacts'>
//               <span>Now show {showingContacts.length} of {contacts.length}</span>
//               <button onClick={this.clearQuery}>Show All</button>
//             </div>
//           )}
//
//
//
//         <ol className='contact-list'>
//           {showingContacts.map((contact) => (
//             <li key={contact.id} className='contact-list-item'>
//               <div className='contact-avatar' style={{
//                 backgroundImage: `url(${contact.avatarURL})`
//               }}/>
//               <div className='contact-details'>
//                 <p>{contact.name}</p>
//                 <p>{contact.email}</p>
//               </div>
//
//               <button onClick={() => onDeleteContact(contact)} className='contact-remove'>
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ol>
//       </div>
//
//     )
//   }
// }
//
// export default ListContacts
