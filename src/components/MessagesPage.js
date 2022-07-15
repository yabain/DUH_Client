import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import UserInfo from './UserInfo.js';
import UserOffers from './UserOffers.js';
import Messages from './Messages.js';
import UserSaveList from './UserSaveList.js';
import UserService from '../services/UserService.js';
import UserItems from './UserItems.js';
import EmailConfirmationBox from './EmailConfirmationBox.js';
import ItemsPostedTab from '../img/Tabs- Items You Posted.png';
import SavedPostsTab from '../img/Tabs- Saved Posts.png';
import MessagesTab from '../img/Tabs- Messages.png';
import ItemsPostedTabGold from '../img/Tabs- Items You Posted- Gold.png';
import SavedPostsTabGold from '../img/Tabs- Saved Posts- Gold.png';
import MessagesTabGold from '../img/Tabs- Messages- Gold.png';

class UserPanel extends Component {

  constructor (props) {
    super(props);
    this.state = {
      showUserItems: false,
      showSavedItems: false,
      showMessageRooms: true,
      ItemsPostedTab: ItemsPostedTab,
      SavedPostsTab: SavedPostsTab,
      MessagesTab: MessagesTabGold,
    };
  }

  showTab (tab = '') {
    if (tab === 'itemsPosted') {
      this.setState({
        showUserItems: true,
        showSavedItems: false,
        showMessageRooms: false,
        ItemsPostedTab: ItemsPostedTabGold,
        SavedPostsTab: SavedPostsTab,
        MessagesTab: MessagesTab,
      });
    } else if (tab === 'savedItems') {
      this.setState({
        showUserItems: false,
        showSavedItems: true,
        showMessageRooms: false,
        ItemsPostedTab: ItemsPostedTab,
        SavedPostsTab: SavedPostsTabGold,
        MessagesTab: MessagesTab,
      });
    } else if (tab === 'messages') {
      this.setState({
        showUserItems: false,
        showSavedItems: false,
        showMessageRooms: true,
        ItemsPostedTab: ItemsPostedTab,
        SavedPostsTab: SavedPostsTab,
        MessagesTab: MessagesTabGold,
      });
    }
  }

  render() {
    const isAuth = UserService.isConnected();
    const { userId, token, firstName} = UserService.getUserSessionDetails() || {};
	 
    if (isAuth) {
      return (
        <div style={{ textAlign:'center', padding: '135px 270px',margin: '0'}} className="UserPanel">
          {/*<EmailConfirmationBox />*/}
          <UserInfo userId={userId} token={token} />

          <hr style={{
            backgroundColor:'#000000',
            width: '90%',
            marginTop: '30px'
              }} />
          <hr style={{
            backgroundColor:'#000000',
                  width: '60%'
              }} />
          <div className="text-left posted-item">
            <ul>
              <li>
                <img src={this.state.MessagesTab} alt="Messages" className="cursor-pointer posted-type" onClick={() => { this.showTab('messages') } } />
              </li>
              <li>
                <img src={this.state.ItemsPostedTab} alt="ItemsPosted" className="cursor-pointer posted-type" onClick={() => { this.showTab('itemsPosted') } } />
              </li>
              <li>
                <img src={this.state.SavedPostsTab} alt="SavedPosts" className="cursor-pointer posted-type" onClick={() => { this.showTab('savedItems') } }/>
              </li>
            </ul>
          </div>

          {
            this.state.showUserItems
            ? <UserItems userId={userId} token={token} />
            : <span></span>
          }

          {
            this.state.showSavedItems
            ? <UserSaveList userId={userId} token={token} />
            : <span></span>
          }

          {
            this.state.showMessageRooms
            ? <Messages />
            : <span></span>
          }
        </div>
      );
    } else {
      return (
        <h1 style={{paddingLeft: '275px'}}>Please Log In...</h1>
      );
    }

  }
}

export default UserPanel;
