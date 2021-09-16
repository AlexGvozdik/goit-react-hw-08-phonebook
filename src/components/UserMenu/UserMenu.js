import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import defaultAvatar from './avatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;

  return (
    <div className={s.userMenu}>
      <img src={avatar} alt="avatar" width="34" className={s.avatar} />
      <span className={s.userName}>Wellcome, {name}</span>
      <button type="button"className={s.btnLogout} onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
}
