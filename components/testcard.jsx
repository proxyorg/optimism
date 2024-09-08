// components/testcard.jsx
export const testcard = ({ title, image, description }) => (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      width: '300px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <img src={image} alt={title} style={{width: '100%', height: '150px', objectFit: 'cover'}} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );