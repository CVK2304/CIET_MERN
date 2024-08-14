
/*

// client/src/App.js
import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem1, setNewItem1] = useState('');
  const [newItem2, setNewItem2] = useState('');
  const [newItem3, setNewItem3] = useState('');
  const [newItem4, setNewItem4] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleAddItem = async () => {
    const response = await addItem({
      name: newItem1,
      age: newItem2,
      mail: newItem3,
      address: newItem4
    });
    setItems([...items, response.data]);
    setNewItem1(''); // Reset all fields after adding
    setNewItem2('');
    setNewItem3('');
    setNewItem4('');
  };

  const handleUpdateItem = async (item) => {
    const response = await updateItem(item._id, {
      name: item.name,
      age: item.age,
      mail: item.mail,
      address: item.address
    });
    setItems(items.map((i) => (i._id === item._id ? response.data : i)));
    setEditingItem(null);
  };

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item._id !== id));
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <input
        type="text"
        value={newItem1}
        onChange={(e) => setNewItem1(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        type="number"
        value={newItem2}
        onChange={(e) => setNewItem2(e.target.value)}
        placeholder="Enter Age"
      />
      <input
        type="mail"
        value={newItem3}
        onChange={(e) => setNewItem3(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        type="text"
        value={newItem4}
        onChange={(e) => setNewItem4(e.target.value)}
        placeholder="Enter Address"
      />
      <button onClick={handleAddItem}>Add</button>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
       

      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            {editingItem === item._id ? (
              <>
              <td>
              <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i,name: e.target.value } : i
                    ))
                  }
                  placeholder="Enter name"
                />
                </td>
                
                <td>
                <input
                  type="number"
                  value={item.age}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, age: e.target.value } : i
                    ))
                  }
                  placeholder="Enter Age"
                />
                </td>
                <td>
                <input
                  type="mail"
                  value={item.mail}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, mail: e.target.value } : i
                    ))
                  }
                  placeholder="Enter Email"
                />
                </td>
                <td>
                <input
                  type="text"
                  value={item.address}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, address: e.target.value } : i
                    ))
                  }
                  placeholder="Enter Address"
                />
                </td>
                <td>
                    <button onClick={() => handleUpdateItem(item)}>Save</button>
                    <button onClick={() => setEditingItem(null)}>Cancel</button>
                  </td>
              </>
             
            ) : (
              <>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.mail}</td>
              <td>{item.address}</td>
              <td>
                    <button onClick={() => setEditingItem(item._id)} class="material-symbols-outlined edit">Edit</button>
                    <button onClick={() => handleDeleteItem(item._id)} class="material-symbols-outlined delete">Delete</button>
                  </td>
              </>
            )}
            
          </tr>
        ))}
       </tbody>
       </table>
    </div>
  );
};

export default App;*/



import React, { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from './services/itemServices';

//import logo from './logo.svg';
import './App.css';



//export default App;

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem1, setNewItem1] = useState('');
  const [newItem2, setNewItem2] = useState('');
  const [newItem3, setNewItem3] = useState('');
  const [newItem4, setNewItem4] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  const handleAddItem = async () => {
    const response = await addItem({
      name: newItem1,
      age: newItem2,
      mail: newItem3,
      address: newItem4
    });
    setItems([...items, response.data]);
    setNewItem1(''); // Reset all fields after adding
    setNewItem2('');
    setNewItem3('');
    setNewItem4('');
  };

  const handleUpdateItem = async (item) => {
    const response = await updateItem(item._id, {
      name: item.name,
      age: item.age,
      mail: item.mail,
      address: item.address
    });
    setItems(items.map((i) => (i._id === item._id ? response.data : i)));
    setEditingItem(null);
  };

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    setItems(items.filter((item) => item._id !== id));
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <input
        type="text"
        value={newItem1}
        onChange={(e) => setNewItem1(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        type="text"
        value={newItem2}
        onChange={(e) => setNewItem2(e.target.value)}
        placeholder="Enter Age"
      />
      <input
        type="text"
        value={newItem3}
        onChange={(e) => setNewItem3(e.target.value)}
        placeholder="Enter Mail"
      />
      <input
        type="text"
        value={newItem4}
        onChange={(e) => setNewItem4(e.target.value)}
        placeholder="Enter Address"
      />
      <button onClick={handleAddItem}>Add</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
       

      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            {editingItem === item._id ? (
              <>
              <td>
              <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, name: e.target.value } : i
                    ))
                  }
                  placeholder="Enter Name"
                />
                </td>
                
                <td>
                <input
                  type="text"
                  value={item.age}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, age: e.target.value } : i
                    ))
                  }
                  placeholder="Enter Age"
                />
                </td>
                <td>
                <input
                  type="text"
                  value={item.mail}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, mail: e.target.value } : i
                    ))
                  }
                  placeholder="Enter Mail"
                />
                </td>
                <td>
                <input
                  type="text"
                  value={item.address}
                  onChange={(e) =>
                    setItems(items.map((i) =>
                      i._id === item._id ? { ...i, address: e.target.value } : i
                    ))
                  }
                  placeholder="Enter Address"
                />
                </td>
                <td>
                    <button onClick={() => handleUpdateItem(item)}>Save</button>
                    <button onClick={() => setEditingItem(null)}>Cancel</button>
                  </td>
              </>
             
            ) : (
              <>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.mail}</td>
              <td>{item.address}</td>
              <td>
                    <button onClick={() => setEditingItem(item._id)} class="material-symbols-outlined edit">Edit</button>
                    <button onClick={() => handleDeleteItem(item._id)} class="material-symbols-outlined delete">Delete</button>
                  </td>
              </>
            )}
            
          </tr>
        ))}
       </tbody>
       </table>
    </div>
  );
};

export default App;
