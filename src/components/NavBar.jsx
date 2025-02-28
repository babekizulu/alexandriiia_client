//libs
import {useState} from 'react';
import axios from 'axios';
//components
import ContextMenu from './ContextMenu';

const MENU_CONFIG = {
    file: {
        id: 'file',
        items: [
            {id: 0, name: 'New', func: () => {
                console.log('Created new file');
            }},
            {id: 1, name: 'Open', func: () => {
                console.log('Opened file');
            }},
            {id: 2, name: 'Save', func: () => {
                console.log('Saved file');
            }},
            {id: 3, name: 'Save As', func: () => {
                console.log('Saved file as');
            }},
        ]
    },
    edit: {
        id: 'edit',
        items: [
            {id: 0, name: 'Undo', func: () => {
                console.log('Undid');
            }},
            {id: 1, name: 'Redo', func: () => {
                console.log('Redid');
            }},
        ]
    },
    view: {
        id: 'view',
        items: [    
            {id: 0, name: 'Zoom In', func: () => {
                console.log('Zoomed in');
            }},
            {id: 1, name: 'Zoom Out', func: () => {
                console.log('Zoomed out');
            }},
        ]
    },
    help: {
        id: 'help',
        items: [
            {id: 0, name: 'Help', func: () => {
                console.log('Redirected to help page');
            }},
            {id: 1, name: 'About', func: () => {
                console.log('Redirected to about page');
            }},
        ]
    }
}

function NavBar() {
  const [activeMenu, setActiveMenu] = useState(null);

  //handlers
  const handleMenuClick = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  }
  return (
    <article className="top-bar">
        <nav>
            <ul>
                {Object.entries(MENU_CONFIG).map(([menuId, menu]) => (
                    <li key={menuId}>
                        <button onClick={() => handleMenuClick(menuId)}>{menu.id}</button>
                    </li>
                ))}
            </ul>
        </nav>
        <div className="menu-container">
            {activeMenu && <ContextMenu isOpen={activeMenu} menuItems={MENU_CONFIG[activeMenu].items}/>}
        </div>
    </article>
  );
};

export default NavBar;
