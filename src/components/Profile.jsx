import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import format from 'date-fns/format';

import UserIcon from '../assets/user.png';
import locationIcon from '../assets/icon-location.svg';
import websiteIcon from '../assets/icon-website.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import companyIcon from '../assets/icon-company.svg';

const Profile = () => {
  const {
    state: { data, isSuccess },
  } = useContext(UserContext);

  return (
    <div className='bg-white dark:bg-lightBlue p-4 shadow-2xl rounded-2xl space-y-5 tablet:p-8'>
      {/* Header */}
      <div className='user-profile flex items-center gap-4'>
        <div className='user-img cursor-pointer'>
          <a href={data.html_url}>
            <img
              className='w-20 h-20 tablet:w-24 tablet:h-24 desktop:w-28 desktop:h-28 rounded-full hover:opacity-70'
              src={isSuccess ? data.avatar_url : UserIcon}
            />
          </a>
        </div>
        <div className='user-info'>
          <p className='text-black dark:text-white font-bold tablet:text-lg desktop:text-xl'>
            {isSuccess ? data.name : 'The Octobat'}
          </p>
          <span className='text-primary text-xs tablet:text-base desktop:text-lg cursor-pointer hover:opacity-70'>
            @{isSuccess ? <a href={data.html_url}>{data.login}</a> : 'octobat'}
          </span>
          <p className='text-xs dark:text-white tablet:text-base desktop:text-lg mt-2'>
            Joined{' '}
            {isSuccess
              ? format(new Date(data.created_at), 'dd MMM yyyy')
              : '25 Jan 2001'}
          </p>
        </div>
      </div>
      {/* bio */}
      <div className='px-2 truncate text-ellipsis'>
        <p className='opacity-70 dark:text-light text-sm tablet:text-base desktop:text-lg'>
          {data.bio ? data.bio : 'This profile has no bio'}
        </p>
      </div>
      {/* Stats */}
      <div className='bg-light dark:bg-darkBlue px-4 py-2 flex items-center justify-between text-xs tablet:text-base desktop:text-lg rounded-lg tablet:px-8'>
        <div className='repos flex flex-col items-center'>
          <p className='dark:text-white'>Repos</p>
          <span className='text-black dark:text-white font-bold mt-2 text-sm tablet:text-base desktop:text-lg'>
            {isSuccess ? data.public_repos : '0'}
          </span>
        </div>
        <div className='followers flex flex-col items-center'>
          <p className='dark:text-white'>Followers</p>
          <span className='text-black dark:text-white font-bold mt-2 text-sm tablet:text-base desktop:text-lg'>
            {isSuccess ? data.followers : '0'}
          </span>
        </div>
        <div className='following flex flex-col items-center'>
          <p className='dark:text-white'>Following</p>
          <span className='text-black dark:text-white font-bold mt-2 text-sm tablet:text-base desktop:text-lg'>
            {isSuccess ? data.following : '0'}
          </span>
        </div>
      </div>
      {/* links */}
      <div className='flex flex-col gap-2 text-xs tablet:text-base desktop:text-lg tablet:grid tablet:grid-cols-2'>
        <div className='location flex items-center gap-3 p-2 truncate'>
          <img className='w-4 h-5 dark:text-white' src={locationIcon} />
          <p className='dark:text-light'>
            {data.location ? data.location : 'Not available'}
          </p>
        </div>
        <div className='website cursor-pointer flex items-center gap-3 p-2 truncate'>
          <img className='w-5 h-5' src={websiteIcon} />
          <a
            href={data.blog}
            className='dark:text-light cursor-pointer hover:opacity-70'
          >
            {data.blog ? data.blog : 'Not available'}
          </a>
        </div>
        <div className='twitter cursor-pointer flex items-center gap-3 p-2 truncate opacity-70'>
          <img className='w-5 h-5' src={twitterIcon} />
          <a
            href={
              data.twitter_username &&
              `https://twitter.com/${data.twitter_username}`
            }
            className='dark:text-light cursor-pointer hover:opacity-50'
          >
            {data.twitter_username ? data.twitter_username : 'Not available'}
          </a>
        </div>
        <div className='company flex items-center gap-3 p-2 truncate'>
          <img className='w-5 h-5' src={companyIcon} />
          <p className='dark:text-light'>
            {data.company ? data.company : 'Not available'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
