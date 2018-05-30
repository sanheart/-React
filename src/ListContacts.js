//创建第一个组件，作用是：接收这些联系人并将它们显示在视图上
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//完成输入框筛选功能：需要向ListContacts组件引入状态，以跟踪输入字段的状态，但由于我们要引入状态，所以需要重构
//此组件将从无状态函数组件变为类组件
// function ListContacts(props) {
//   return (
//     <ol className='contact-list'>
//       {props.contacts.map((contact) => (
//         <li key={contact.id} className='contact-list-item'>
//           <div className='contact-avatar' style={{
//             backgroundImage: `url(${contact.avatarURL})`
//           }}/>
//           <div className='contact-details'>
//             <p>{contact.name}</p>
//             <p>{contact.email}</p>
//           </div>
//
//           <button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>
//             Remove
//           </button>
//         </li>
//       ))}
//     </ol>
//   )
// }

//向无状态函数组件添加一个属性



class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }
  render() {
    //props是一个对象，拥有一个属性-contacts（存于App.js中的数组）
    console.log('Props', this.props);
    return (
      <div className='list-contacts'>
      {JSON.stringify(this.state)}
        <div className='List-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search contacts'
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value) }
          />
        </div>
        <ol className='contact-list'>
          {this.props.contacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <div className='contact-avatar' style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}/>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>

              <button className='contact-remove'>
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>

    )
  }
}

export default ListContacts
