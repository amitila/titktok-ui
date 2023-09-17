import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/75f6b41ea1cd7cd382a37bcc51b6cf7e~c5_100x100.jpeg?x-expires=1694944800&x-signature=IR3TxDJEM5o0Ay%2BEefpcMIz9vw0%3D"
        alt=""
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Ami Kiako</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>ami</span>
      </div>
    </div>
  );
}

export default AccountItem;
