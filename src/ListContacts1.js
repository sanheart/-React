import React, { Component } from 'react'
//ProposType包:不仅可以指定你要传递的prop的具体类型（字符串、数组、对象、函数等）
import ProposTypes from 'prop-types'

class ListContacts1 extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }
  //将输入字段与状态的特定属性的值绑定,这样做的目的是它将允许我们根据此表单数据来更新UI
  //创建受控组件

  //我们需要在ListContacts中引入状态，以跟踪输入字段的状态
  state = {
    query: ''
  }
  //每当字段发生变化时，便更新query
  updateQuery = (query) => {
    //不会根据之前的状态更新状态
    this.setState({
      //直接传递对象,让query等于query.trim(删掉周围额外的空格)的值
      query: query.trim()
    })
  }
 render() {
   //返回的是一个具有contacts属性的对象
   console.log('Props:', this.props )
   return (
     <div className='list-contacts'>
     {/*每当我们打字时，query状态会随着输入字段的更新而更新*/}
     {JSON.stringify(this.state)}
      <div className='list-contacts-top'>
      {/*1.想让此输入字段的值=this.state.query
        2.每当输入字段发生变化时，就触发事件,，调用updateQuery函数时，
          传递给它输入字段的特定值*/}
        <input
          className='search-contacts'
          type='text'
          placeholder='search contacts'
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
      </div>
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
     </div>
   )
 }
}

// //使用PropTypes进行类型检查
// ListContacts1.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired
// }

export default ListContacts1
