import { useState } from 'react';
import './Community.css';

function Community () {
  const [data, setData] = useState([
  {
    num : 0,
    title : 'szuki',
    id : '페이커',
    like : 1,
    view : 0 
  },
  {
    num : 1,
    title : 'honda',
    id : '케리아',
    like : 0,
    view : 0 
  },
])
console.log(data)
  
// like + 1 section
const plusLike = (index) => {
  updateData = [...data]
  updateData(index).like += 1;
  setData(updateData)
}

// view + 1 section
const plusView = (index) => {
  updateView = [...data]
  updateView(index).view += 1;
  setData(updateView)
}
  localStorage.setItem('postData', JSON.stringify(data));

  return (
    <>
    <div className='community_bgc'>
      <div className='notice_board'>
        <table className='post_table'>
          <thead>
            <tr className='tr'>
              <th>No.</th>
              <th>제목</th>
              <th>아이디</th>
              <th>좋아요</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data[0].num}</td>
              <td>{data[0].title}</td>
              <td>{data[0].id}</td>
              <td>{data[0].like}</td>
              <td>{data[0].view}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Community;