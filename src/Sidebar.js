import React from 'react'
import './css/Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src={'https://cdn4.iconfinder.com/data/icons/ios-web-user-interface-multi-circle-flat-vol-5/512/Collaboration_group_people_men_user_team_users-512.png'} title='Chot xtyle' />
            <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplaces" />
        </div>
    )
}

export default Sidebar
