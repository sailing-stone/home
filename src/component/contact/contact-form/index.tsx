import Input from '@/component/base/input';
import Select from '@/component/base/select';
import Text from '@/component/base/text';
import useIntersectingNavigation from '@/hook/useIntersectingNavigation';
import ContactSubmitButton from './contact-submit-button';
import ContactTypeButtons from './contact-type-buttons';

const OPTIONS = [
  '컨설팅 및 개발 문의',
  '기술 지원 문의',
  '견적 문의',
  'Tableau 교육 문의',
  '기타',
];

const ContactForm = () => {
  const ref = useIntersectingNavigation('문의하기');

  return (
    <section
      ref={ref}
      id='contact'
      className='flex flex-col items-center gap-40 px-[2.4rem] py-60 mobile:gap-20 mobile:py-40 tablet:py-52'
    >
      <ContactTypeButtons />
      <form className='flex w-full flex-col items-center gap-20 mobile:gap-8 desktop:max-w-[65.2rem]'>
        <div className='flex w-full gap-8 mobile:flex-col'>
          <Input.Wrapper className='basis-1/2'>
            <Input.Label
              variant='title16'
              required
              htmlFor='회사명'
            >
              회사명
            </Input.Label>
            <Input.Filed
              id='회사명'
              name='company'
            />
          </Input.Wrapper>
          <Input.Wrapper className='basis-1/2'>
            <Input.Label
              variant='title16'
              required
              htmlFor='이름'
            >
              이름
            </Input.Label>
            <Input.Filed
              id='이름'
              name='name'
            />
          </Input.Wrapper>
        </div>
        <div className='flex w-full gap-8 mobile:flex-col'>
          <Input.Wrapper className='basis-1/2'>
            <Input.Label
              variant='title16'
              htmlFor='부서명'
            >
              부서명
            </Input.Label>
            <Input.Filed
              id='부서명'
              name='department'
            />
          </Input.Wrapper>
          <Input.Wrapper className='basis-1/2'>
            <Input.Label
              variant='title16'
              htmlFor='직급'
            >
              직급
            </Input.Label>
            <Input.Filed
              id='직급'
              name='rank'
            />
          </Input.Wrapper>
        </div>
        <div className='flex w-full gap-8 mobile:flex-col'>
          <Input.Wrapper className='basis-1/2'>
            <Input.Label
              variant='title16'
              required
              htmlFor='연락처'
            >
              연락처
            </Input.Label>
            <Input.Filed
              id='연락처'
              name='contact'
            />
          </Input.Wrapper>
          <Input.Wrapper className='basis-1/2'>
            <Input.Label
              variant='title16'
              required
              htmlFor='이메일'
            >
              이메일
            </Input.Label>
            <Input.Filed
              id='이메일'
              name='email'
            />
          </Input.Wrapper>
        </div>
        <Input.Wrapper className='w-full'>
          <Input.Label
            variant='title16'
            required
          >
            문의 구분
          </Input.Label>
          <Select
            options={OPTIONS}
            // onChange={(option) => console.log(option)}
          />
        </Input.Wrapper>
        <Input.Wrapper className='w-full'>
          <Input.Label
            variant='title16'
            required
          >
            문의 내용
          </Input.Label>
          <Input.Textarea className='h-[30rem]' />
        </Input.Wrapper>
      </form>
      <div className='flex w-full flex-col gap-12 desktop:max-w-[65.2rem]'>
        <Input.Wrapper className='flex-row items-center gap-4 self-center'>
          <Input.Filed
            type='checkbox'
            id='동의'
            name='agree'
            className='size-8'
          />
          <Input.Label
            variant='title16'
            htmlFor='동의'
            required
            className='leading-[20px]'
          >
            개인정보 수집 및 이용에 동의합니다.
          </Input.Label>
        </Input.Wrapper>
        <div className='flex flex-col gap-2'>
          <Input.Label
            variant='title18'
            required
          >
            개인정보 수집 및 이용에 대한 동의
          </Input.Label>
          <div className='flex flex-col gap-8 rounded-lg border border-gray-100 p-8 leading-[17px]'>
            <Text
              as='p'
              variant='title16'
              font={400}
            >
              주식회사 세일링스톤 (이하 “회사”라 칭함)은 개인정보보호법,
              정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령상의
              개인정보보호 규정을 준수하며, 파트너의 개인정보 보호에 최선을
              다하고 있습니다.
            </Text>
            <Text
              as='p'
              variant='title16'
              font={400}
            >
              “회사”는 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로
              이용되는지 알려 드립니다. 내용을 읽어보시고 동의 여부를 결정하시기
              바랍니다.
            </Text>

            <Text
              as='p'
              variant='title16'
              font={400}
            >
              1. 개인정보 수집항목 - 필수정보 : 회사명, 이름, 연락처, 이메일
              <br />- 선택정보 : 부서명, 직급
            </Text>
            <Text
              as='p'
              variant='title16'
              font={400}
            >
              2. 개인정보 수집목적 - 고객 문의접수 및 결과 회신
              <br />- 주식회사 세일링스톤 정보 이메일 발신
            </Text>
          </div>
        </div>
      </div>
      <ContactSubmitButton />
    </section>
  );
};

export default ContactForm;
