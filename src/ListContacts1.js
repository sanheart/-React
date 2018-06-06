import React, { Component } from 'react'
//ProposType包:不仅可以指定你要传递的prop的具体类型（字符串、数组、对象、函数）

class ListContacts1 extends Component {
 render() {
   //返回的是一个具有contacts属性的对象
   console.log('Props:', this.props )
   return (
     <ol className='contact-list'>
        {/* 创造一个列表项
          1.向map传递一个函数,这个函数会被数组中的每一项逐个调用 */}
        {this.props.contacts.map((contact) => (
          //成为数组中每一项的指定用户界面 数组或迭代时，应每个项都有唯一的一个key属性
          <li key={contact.id} className='contact-list-item'>
            {/* 显示联系人信息
             1.先创建头像(这个div的背景就是该头像,style是一个对象
               url中使用了ES6 模板字符串)
             2.再显示联系人详情3.最后创建删除按钮 */}
            <div className='contact-avatar' style={{
              backgroundImage: `url(${contact.avatarURL})`,
            }}/>
            <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            {/* this.props.onDeleteContact每当此按钮被点击时调用它
              这个箭头函数的作用：将调用this.props.onDeleteContact
              向它传递我们正在迭代的特定联系人*/}
            <button onClick={() => this.props.onDeleteContact(contact)}className='contact-remove'>
              Remove
            </button>
          </li>
        ))}
     </ol>
   )
 }
}

export default ListContacts1
