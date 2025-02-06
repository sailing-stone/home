import Input from '@/component/base/input';
import Select from '@/component/base/select';
import ContactSubmitButton from './contact-submit-button';
import ContactTypeButtons from './contact-type-buttons';

const ContactForm = () => {
  return (
    <section className='flex flex-col px-[10%] pb-[20.7rem] pt-[16.1rem]'>
      <ContactTypeButtons />
      <p className='mt-[11.2rem] text-[1.6rem] font-medium leading-[1.9rem]'>
        <span className='font-bold text-primary-main'>*</span> 표시는 필수 입력
        항목입니다.
      </p>
      <form className='flex flex-col gap-20 pt-[3.3rem]'>
        <div className='flex gap-8 mobile:flex-col'>
          <Input.Wrapper>
            <Input.Label
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
          <Input.Wrapper>
            <Input.Label
              required
              htmlFor='회사'
            >
              회사
            </Input.Label>
            <Input.Filed
              id='회사'
              name='company'
            />
          </Input.Wrapper>
        </div>
        <div className='flex gap-8 mobile:flex-col'>
          <Input.Wrapper>
            <Input.Label htmlFor='부서'>부서</Input.Label>
            <Input.Filed
              id='부서'
              name='department'
            />
          </Input.Wrapper>
          <Input.Wrapper>
            <Input.Label htmlFor='직급'>직급</Input.Label>
            <Input.Filed
              id='직급'
              name='rank'
            />
          </Input.Wrapper>
        </div>
        <div className='flex gap-8 mobile:flex-col'>
          <Input.Wrapper>
            <Input.Label
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
          <Input.Wrapper>
            <Input.Label
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
        <Input.Wrapper>
          <Input.Label required>문의 유형</Input.Label>
          <Select
            options={['1번 유형', '2번 유형', '3번 유형']}
            // onChange={(option) => console.log(option)}
          />
        </Input.Wrapper>
        <Input.Wrapper>
          <Input.Label required>문의 내용</Input.Label>
          <Input.Textarea />
        </Input.Wrapper>
        <Input.Wrapper className='mt-[4.4rem] flex-row gap-[1.9rem] self-center'>
          <Input.Filed
            type='checkbox'
            id='동의'
            name='agree'
            className='scale-150'
          />
          <Input.Label
            htmlFor='동의'
            required
          >
            개인정보처리방침에 동의합니다.
          </Input.Label>
        </Input.Wrapper>
        <ContactSubmitButton />
      </form>
    </section>
  );
};

export default ContactForm;
