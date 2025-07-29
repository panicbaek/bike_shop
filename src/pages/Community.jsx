import { use, useState } from 'react';
import './Community.css';

function Community () {
  const [userData, setUserDate] = useState(0);
  const [like, setLike] = useState(0);
  const [views, setViews] = useState(0);
  // date
  const date = new Date().toLocaleDateString();

  // userData
  const allData = [{
    num : 1,
    title : 'title',
    nickName : 'Banana',
    date : date,
    like : 0,
  },
  {
    num : 2,
    title : 'title',
    nickName : 'Sun',
    date : date,
    like : 0,
  },
  {
    num : 3,
    title : 'title',
    nickName : 'Cat',
    date : date,
    like : 0,
  },
  {
    num : 4,
    title : 'title',
    nickName : 'Babo',
    date : date,
    like : 0,
  },
  {
    num : 5,
    title : 'title',
    nickName : 'Doran',
    date : date,
    like : 0,
  },
  {
    num : 6,
    title : 'title',
    nickName : 'Apple',
    date : date,
    like : 0,
  }
]
  console.log(date)

  return (
    <>
    <div className='border-box'>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">NickName</th>
          <th scope="col">Title</th>
          <th scope="col">Date</th>
          <th scope="col">Like<i className="bi bi-hand-thumbs-up-fill"></i></th>
          <th scope="col">Views <i className="bi bi-eye-fill"></i></th>
        </tr>
      </thead>
      <tbody>
        {allData.map((data, index) => (
          <tr key={index}>
            <th scope="row">{data.num}</th>
            <td>{data.nickName}</td>
            <td>{data.title}</td>
            <td>{data.date}</td>
            {/* like section */}
            <td>
              <i
                className="bi bi-hand-thumbs-up-fill"
                onClick={()=> {
                  setLike(like + 1)
                }}
              ></i>
              {like}
            </td>
            <td><i className="bi bi-eye-fill"></i> 0</td>
          </tr>
        ))}
      </tbody>
     </table>
     {/* Writing */}
     <div className='writing'>
      <button className='previous-button'><i className="bi bi-caret-left-fill"></i></button>
      <button className='next-button'><i className="bi bi-caret-right-fill"></i></button>
     </div>
     <div className='button-box'>
      <form action="">
        <input type="text" />
        <button type='submit' className='title-button'>submit</button>
      </form>
     </div>
     </div>
    </>
  )
}

export default Community;