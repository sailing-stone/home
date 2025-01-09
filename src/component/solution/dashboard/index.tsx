import { Link } from 'react-router-dom';
import DashboardImage_1 from '@/asset/image/solution/dashboard-bg1.png';
import DashboardImage_2 from '@/asset/image/solution/dashboard-bg2.png';
import DashboardImage_3 from '@/asset/image/solution/dashboard-bg3.png';
import MonitorImage from '@/asset/image/solution/monitor.png';
import Badge from '@/component/base/badge';
import Image from '@/component/base/Image';
import URL from '@/constant/url';

const Dashboard = () => {
  return (
    <section
      id='대시보드 on TV'
      className='flex flex-col items-center justify-center pb-[26rem]'
    >
      <Badge>
        <h1 className='section-title'>대시보드 on TV</h1>
      </Badge>
      <p className='section-description'>
        실시간 데이터 모니터링의 새로운 차원
      </p>
      <div className='flex items-center  gap-[7.4rem] pb-[15.6rem] pt-[10.7rem]'>
        <Image
          width='77.9rem'
          height='50.5rem'
          src={MonitorImage}
          alt='모니터'
        />
        <p className='text-[4rem] font-medium leading-[7.5rem]'>
          회의실, 사무실 로비, 공장 현장 등<br />
          <span className='font-black underline decoration-2 underline-offset-8'>
            다양한 장소에서
          </span>
          팀원들과
          <br />
          <span className='font-black underline decoration-2 underline-offset-8'>
            중요한 정보를 공유하고
          </span>
          <br />
          <span className='font-black underline decoration-2 underline-offset-8'>
            협업을 강화
          </span>
          할 수 있는 솔루션입니다.
        </p>
      </div>
      <ul className='flex items-end gap-[2.9rem]'>
        <li
          className='flex h-[62.2rem] w-[37rem] flex-col justify-between rounded-[3rem] bg-cover bg-center bg-no-repeat px-[4.4rem] py-[3.9rem]'
          style={{
            backgroundImage: `url(${DashboardImage_1})`,
          }}
        >
          <h3 className='text-[3.2rem] font-extrabold leading-[3.8rem] text-common-black'>
            공간 제약없는
            <br />
            편리한 솔루션
          </h3>
          <p className='text-[2.4rem] font-normal leading-[3.5rem] text-common-white'>
            네트워크가 가능한 환경이라면 대형스크린, TV, 모니터, 태블릿, 모바일
            어디에서든 접속하여 누구나 간편하게 사용할 수 있도록 구성되었습니다.
          </p>
        </li>
        <li
          className='flex h-[40.1rem] w-[37rem] flex-col justify-between rounded-[3rem] bg-cover bg-center bg-no-repeat px-[4.4rem] py-[3.9rem]'
          style={{
            backgroundImage: `url(${DashboardImage_2})`,
          }}
        >
          <h3 className='text-[3.2rem] font-extrabold leading-[3.8rem] text-common-white'>
            강력한
            <br />
            커스터마이징 옵션
          </h3>
          <Link
            to={URL.SOLUTION}
            className='text-[2.4rem] font-normal leading-[3.5rem] text-common-white'
          >
            LEARN MORE {'>'}
          </Link>
        </li>
        <li
          className='flex h-[40.1rem] w-[37rem] flex-col justify-between rounded-[3rem] bg-cover bg-center bg-no-repeat px-[4.4rem] py-[3.9rem]'
          style={{
            backgroundImage: `url(${DashboardImage_3})`,
          }}
        >
          <h3 className='text-[3.2rem] font-extrabold leading-[3.8rem] text-common-white'>
            스케줄링을 통한
            <br />
            데이터 최신화
          </h3>
          <Link
            to={URL.SOLUTION}
            className='text-[2.4rem] font-normal leading-[3.5rem] text-common-white'
          >
            LEARN MORE {'>'}
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Dashboard;
