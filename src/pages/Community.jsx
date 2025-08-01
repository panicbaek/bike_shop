import { useState } from 'react';
import './Community.css';

function Community() {
  const [data, setData] = useState([
    {
      num: 0,
      title: 'szuki',
      id: '페이커',
      like: 0,
      view: 0
    },
    {
      num: 1,
      title: 'honda',
      id: '케리아',
      like: 0,
      view: 0
    },
    {
      num: 2,
      title: 'kawasaki',
      id: '구마유시',
      like: 0,
      view: 0
    },
  ]);

  // 좋아요 증가
  const plusLike = (i) => {
    const updateData = [...data];
    updateData[i].like += 1;
    setData(updateData);
  };

  // 조회수 증가
  const plusView = (i) => {
    const updateData = [...data];
    updateData[i].view += 1;
    setData(updateData);
  };

  // 로컬스토리지 저장
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
              {data.map((item, i) => (
                <tr key={i}>
                  <td>{item.num}</td>
                  <td className='td_view' onClick={() => plusView(i)}>{item.title}</td>
                  <td>{item.id}</td>
                  <td className='td_like' onClick={() => plusLike(i)}>
                    👍
                     {item.like}
                  </td>
                  <td><i class="bi bi-eye"></i> {item.view}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Community;
