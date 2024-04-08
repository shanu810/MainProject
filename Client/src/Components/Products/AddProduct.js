// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function AddProduct() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch product data from backend
//     axios.get('/api/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching product data:', error);
//       });
//   }, []); // Empty dependency array means this effect runs once on component mount

//   return (
//     <div>
//       <h1>Product List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Category</th>
//             <th>Image</th>
//             <th>Stock</th>
//             <th>Active</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.pname}</td>
//               <td>{product.pdescription}</td>
//               <td>{product.price}</td>
//               <td>{product.category_name}</td>
//               <td>
//                 {product.image && (
//                   <img src={product.image} alt={product.pname} style={{ width: '100px', height: '100px' }} />
//                 )}
//               </td>
//               <td>{product.stock}</td>
//               <td>{product.is_active ? 'Yes' : 'No'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AddProduct;
