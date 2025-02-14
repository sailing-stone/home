import { FormEvent, useState } from 'react';
import Input from '@/component/base/input';
import Select from '@/component/base/select';
import Text from '@/component/base/text';
import CONFIG from '@/constant/config';
import useIntersectingNavigation from '@/hook/useIntersectingNavigation';
import ContactTypeButtons from './contact-type-buttons';

interface Contact {
  category: string;
  company_name: string;
  content: string;
  department_name?: string;
  email: string;
  phone: string;
  position?: string;
  user_name: string;
}

const postContact = async (formData: Contact) => {
  const response = await fetch(`${CONFIG.API_BASE_URL}/api/homepage`, {
    method: 'POST',
    body: JSON.stringify({ ...formData }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} error`);
  }

  return response.json();
};

const OPTIONS = [
  '컨설팅 및 개발 문의',
  '기술 지원 문의',
  '견적 문의',
  'Tableau 교육 문의',
  '기타',
];

const ContactForm = () => {
  const ref = useIntersectingNavigation('문의하기');
  const [, setType] = useState('태블로 서비스');
  const [category, setCategory] = useState<string>(OPTIONS[0]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const { currentTarget } = event;

    event.preventDefault();

    const formData = new FormData(currentTarget);
    const company = formData.get('company') as string;
    const name = formData.get('name') as string;
    const department = formData.get('department') as string;
    const rank = formData.get('rank') as string;
    const contact = formData.get('contact') as string;
    const email = formData.get('email') as string;
    const content = formData.get('content') as string;
    const isAgree = formData.get('agree') as string;

    if (
      !company ||
      !name ||
      !contact ||
      !email ||
      !category ||
      !content ||
      !isAgree
    ) {
      return;
    }

    setIsLoading(true);

    try {
      await postContact({
        category,
        company_name: company,
        content,
        department_name: department,
        email,
        phone: contact,
        position: rank,
        user_name: name,
      });

      currentTarget.reset();
    } catch {
      // eslint-disable-next-line no-alert
      alert('문의가 많아 처리 지연중입니다. 나중에 다시 시도 해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      ref={ref}
      id='contact'
      className='flex flex-col items-center gap-40 px-[2.4rem] py-60 mobile:gap-20 mobile:py-40 tablet:py-52'
      onSubmit={handleSubmit}
    >
      <ContactTypeButtons onChange={(newType) => setType(newType)} />
      <div className='flex w-full flex-col items-center gap-20 mobile:gap-8 desktop:max-w-[65.2rem]'>
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
              required
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
              required
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
              type='phone'
              required
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
              type='email'
              required
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
            onChange={(option) => setCategory(option as string)}
          />
        </Input.Wrapper>
        <Input.Wrapper className='w-full'>
          <Input.Label
            variant='title16'
            required
            htmlFor='내용'
          >
            문의 내용
          </Input.Label>
          <Input.Textarea
            id='내용'
            name='content'
            required
            className='h-[30rem]'
          />
        </Input.Wrapper>
      </div>
      <div className='flex w-full flex-col gap-12 desktop:max-w-[65.2rem]'>
        <Input.Wrapper className='flex-row items-center gap-4 self-center'>
          <Input.Filed
            type='checkbox'
            id='동의'
            name='agree'
            required
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
      <button
        type='submit'
        disabled={isLoading}
        className='shrink-0 rounded-[2.8rem] bg-submit px-48 py-6 shadow-button mobile:px-[4.6rem] mobile:py-4'
      >
        <Text
          as='p'
          variant='title20'
          strong={600}
          className='text-common-white'
        >
          문의하기
        </Text>
      </button>
    </form>
  );
};

export default ContactForm;
