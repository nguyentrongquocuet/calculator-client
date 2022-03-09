const PORTAL_ID = 'portal';

const getPortal = () => document.getElementById(PORTAL_ID)!;

const createPortal = () => {
  const portal = document.createElement('div');
  portal.id = PORTAL_ID;
  document.body.appendChild(portal);
};

(() => {
  if (!getPortal()) createPortal();
})();

export { getPortal };
