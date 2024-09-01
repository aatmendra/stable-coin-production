import React, { ReactNode } from "react";

interface SvgBackgroundProps {
	children: ReactNode;
}
// React component that uses the SVG as a background
const SvgBackground = ({ children }: SvgBackgroundProps) => {
	const svgString = `
    <svg width="1076" height="1221" viewBox="0 0 1076 1221" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M134.884 14.5C127.222 14.5 121.002 20.9973 121.002 29C121.002 20.9973 114.782 14.5 107.12 14.5C114.782 14.5 121.002 8.00273 121.002 0C121.002 8.00273 127.222 14.5 134.884 14.5Z" fill="#FAFBF5"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M438.473 498.5C446.134 498.5 452.355 504.997 452.355 513C452.355 504.997 458.575 498.5 466.236 498.5C458.575 498.5 452.355 492.003 452.355 484C452.355 492.003 446.134 498.5 438.473 498.5Z" fill="#FAFBF5"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M830.992 190.5C823.331 190.5 817.11 196.997 817.11 205C817.11 196.997 810.89 190.5 803.229 190.5C810.89 190.5 817.11 184.003 817.11 176C817.11 184.003 823.331 190.5 830.992 190.5Z" fill="#FAFBF5"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7638 674.5C35.4253 674.5 41.6456 680.997 41.6456 689C41.6456 680.997 47.8658 674.5 55.5273 674.5C47.8658 674.5 41.6456 668.003 41.6456 660C41.6456 668.003 35.4253 674.5 27.7638 674.5Z" fill="#FAFBF5"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.000107835 1206.5C7.66163 1206.5 13.8819 1213 13.8819 1221C13.8819 1213 20.1021 1206.5 27.7637 1206.5C20.1021 1206.5 13.8819 1200 13.8819 1192C13.8819 1200 7.66163 1206.5 0.000107835 1206.5Z" fill="#FAFBF5"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1075.12 952.5C1067.46 952.5 1061.24 958.997 1061.24 967C1061.24 958.997 1055.02 952.5 1047.36 952.5C1055.02 952.5 1061.24 946.003 1061.24 938C1061.24 946.003 1067.46 952.5 1075.12 952.5Z" fill="#FAFBF5"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M908.884 610.5C901.222 610.5 895.002 616.997 895.002 625C895.002 616.997 888.782 610.5 881.12 610.5C888.782 610.5 895.002 604.003 895.002 596C895.002 604.003 901.222 610.5 908.884 610.5Z" fill="#FAFBF5"/>
    </svg>
  `;

	const encodedSvg = encodeURIComponent(svgString);
	const svgDataUrl = `url('data:image/svg+xml;charset=utf8,${encodedSvg}')`;

	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
				backgroundImage: svgDataUrl,
				backgroundSize: "cover",
				backgroundPosition: "center",
				position: "relative",
			}}
			className=""
		>
			{children}
		</div>
	);
};

export default SvgBackground;
