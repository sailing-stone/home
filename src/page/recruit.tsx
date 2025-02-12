import Construction from '@/component/common/construction';
import VisibleGuard from '@/component/common/visible-guard';
import Banner from '@/component/recruit/banner';
import CoreValue from '@/component/recruit/core-value';
import TBD from '@/component/recruit/TBD';
import WelfareBenefits from '@/component/recruit/welfare-benefits';

const RecruitPage = () => {
  return (
    <div>
      <Construction />
      <VisibleGuard isVisible={false}>
        <Banner />
        <CoreValue />
        <TBD />
        <WelfareBenefits />
      </VisibleGuard>
    </div>
  );
};

export default RecruitPage;
