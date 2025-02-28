function ContextMenu({menuItems, isOpen}) {
  return (
    <div className="context-menu">
      {isOpen && (
        <ul>
        {menuItems.map((item) => (
          <button key={item.id} onClick={item.func}>{item.name}</button>
        ))}
      </ul>
      )}
    </div>
  );
}

export default ContextMenu;
