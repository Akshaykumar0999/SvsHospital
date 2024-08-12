import './index.css'
import Table from 'react-bootstrap/Table';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
const ActivityTwo = () => {
    return (
        <div className="Home-main-container">
            <Navbar />
            <div className="activities-two-main-container">
                <div className='activities-header-card'>
                    <h1 className='activity-title-name'>Activity 2 (Add Time Points)</h1>
                    <Link to='/'>
                        <button className='back-button'><IoMdArrowRoundBack className='back-icon' />Back</button>
                    </Link>
                </div>
                <div className='activity-two-content-card'>
                    <div className="titles-cards">
                        <h3 className='title-name-styles'>Study No: <span className='title-des-styles'>100</span></h3>
                        <h3 className='title-name-styles'>Peroid: <span className='title-des-styles'>P1</span></h3>
                        {/* <h3>Animal Id : 10010</h3> */}
                    </div>

                    <div className="table-main-container">
                        <h3 className='title-des-styles'>Add TP's</h3>
                        <table className='table-main-container'>
                            {/* <thead>
                                <th>TP's</th>
                                <th>Study100 (GroupName1)</th>
                                <th>Study100  (GroupName2)</th>
                            </thead> */}
                            <tbody className='tbody-styles-card'>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP's</td>
                                    <td className='td-name-card-styles'>St:100(Grp1)</td>
                                    <td className='td-name-card-styles'>St:101(Grp2)</td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP1</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP2</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP3</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP4</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP5</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP6</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP7</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP8</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP9</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP10</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP11</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP12</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP13</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP14</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP15</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP16</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP17</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP18</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP19</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                <tr className='tr-name-card-styles'>
                                    <td className='td-name-tps-card-styles'>TP20</td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                    <td className='td-name-card-styles'><input type="text" required className='table-tp-header' /><input type="text" required className='table-tp-header' /></td>
                                </tr>
                                
                                
                                {/* <tr>
                                    <th className='table-header-names'>
                                        Study100 (GroupName1)
                                    </th>
                                    <td>
                                        <label>TP1</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td>
                                    <td>
                                        <label>TP2</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td> <td>
                                        <label>TP3</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td> <td>
                                        <label>TP4</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td> <td>
                                        <label>TP5</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td> <td>
                                        <label>TP6</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td> <td>
                                        <label>TP7</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td> <td>
                                        <label>TP8</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td>
                                    <td>
                                        <label>TP9</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <label>TP10</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <label>TP11</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <label>TP12</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <label>TP13</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <label>TP14</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <label>TP15</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <label>TP16</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <label>TP17</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <label>TP18</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <label>TP19</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <label>TP20</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <label>TP21</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <label>TP22</label>
                                        <input type="text" required className='table-tp-header' />
                                    </td>
                                </tr>
                                <tr>
                                    <th className='table-header-names'>
                                        Study100  (GroupName2)
                                    </th>
                                    <td>
                                        <input type="text" required className='table-tp-header' />
                                    </td>
                                    <td>
                                        <input type="text" required className='table-tp-header' />
                                    </td> <td>
                                        <input type="text" required className='table-tp-header' />
                                    </td> <td>
                                        <input type="text" required className='table-tp-header' />
                                    </td> <td>
                                        <input type="text" required className='table-tp-header' />
                                    </td> <td>
                                        <input type="text" required className='table-tp-header' />
                                    </td> <td>
                                        <input type="text" required className='table-tp-header' />
                                    </td> <td>
                                        <input type="text" required className='table-tp-header' />
                                    </td>
                                    <td>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <input type="text" required className='table-tp-header' />
                                    </td><td>
                                        <input type="text" required className='table-tp-header' />
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>


                    </div>
                    <button className="submit-save-button">
                        Save
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ActivityTwo