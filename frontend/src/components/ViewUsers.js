import '../styles/View.css'
import ViewDoctor from './ViewDoctor';




const ViewUsers= () => {
 
  
 
return ( 
  <div className="allproducts">
  <h1>All Doctor Users</h1>
  <table>
  <tr>
    <th>Id</th>
    <th>Firstname</th>
    <th>lastname</th>
    <th>Username</th>
    <th>Email</th>
    <th>Role</th>
  </tr>
<ViewDoctor/>
</table>

  
  </div>
   );
}
 
export default ViewUsers;