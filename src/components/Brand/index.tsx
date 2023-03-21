import './index.css';
import AgricultureIcon from '@mui/icons-material/Agriculture';
interface BrandInterface {
  title: string;
}
export function Brand({ title }: BrandInterface) {
  return (
    <div className="navbar-brand brand-container">
      <h3 className="brand-header">{title}</h3>
      <AgricultureIcon fontSize="large" sx={{ color: '#ff0000' }} />
    </div>
  );
}
