function BackgroundClickEffect() {
  return (
    <div className="background-click-effects" aria-hidden="true">
      <svg className="abstract-network-art" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="network-blue" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#38bdf8" stopOpacity="0.04" />
            <stop offset="0.5" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="1" stopColor="#3b82f6" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="network-green" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0" stopColor="#34d399" stopOpacity="0.05" />
            <stop offset="0.52" stopColor="#34d399" stopOpacity="0.42" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        <g className="network-group network-group-primary" stroke="url(#network-blue)">
          <path d="M-40 145 L150 95 330 155 510 105 690 170 870 110 1050 165 1230 100 1480 155" />
          <path d="M-40 325 L150 275 330 335 510 285 690 350 870 290 1050 345 1230 280 1480 335" />
          <path d="M-40 505 L150 455 330 515 510 465 690 530 870 470 1050 525 1230 460 1480 515" />
          <path d="M-40 685 L150 635 330 695 510 645 690 710 870 650 1050 705 1230 640 1480 695" />
          <path d="M-40 865 L150 815 330 875 510 825 690 890 870 830 1050 885 1230 820 1480 875" />
          <path d="M150 95 L150 275 330 155 330 335 510 105 510 285 690 170 690 350 870 110 870 290 1050 165 1050 345 1230 100 1230 280" />
          <path d="M150 275 L150 455 330 335 330 515 510 285 510 465 690 350 690 530 870 290 870 470 1050 345 1050 525 1230 280 1230 460" />
          <path d="M150 455 L150 635 330 515 330 695 510 465 510 645 690 530 690 710 870 470 870 650 1050 525 1050 705 1230 460 1230 640" />
          <path d="M150 635 L150 815 330 695 330 875 510 645 510 825 690 710 690 890 870 650 870 830 1050 705 1050 885 1230 640 1230 820" />
        </g>
        <g className="network-nodes network-nodes-primary">
          <circle cx="150" cy="95" r="2" /><circle cx="330" cy="155" r="2.4" />
          <circle cx="510" cy="105" r="1.8" /><circle cx="690" cy="170" r="2.3" />
          <circle cx="870" cy="110" r="1.9" /><circle cx="1050" cy="165" r="2.5" />
          <circle cx="1230" cy="100" r="2" /><circle cx="150" cy="275" r="2.2" />
          <circle cx="330" cy="335" r="1.8" /><circle cx="510" cy="285" r="2.5" />
          <circle cx="690" cy="350" r="2" /><circle cx="870" cy="290" r="2.4" />
          <circle cx="1050" cy="345" r="1.8" /><circle cx="1230" cy="280" r="2.3" />
        </g>
        <g className="network-group network-group-secondary" stroke="url(#network-green)">
          <path d="M-40 235 L150 185 330 245 510 195 690 260 870 200 1050 255 1230 190 1480 245" />
          <path d="M-40 415 L150 365 330 425 510 375 690 440 870 380 1050 435 1230 370 1480 425" />
          <path d="M-40 595 L150 545 330 605 510 555 690 620 870 560 1050 615 1230 550 1480 605" />
          <path d="M-40 775 L150 725 330 785 510 735 690 800 870 740 1050 795 1230 730 1480 785" />
          <path d="M150 185 L150 365 330 245 330 425 510 195 510 375 690 260 690 440 870 200 870 380 1050 255 1050 435 1230 190 1230 370" />
          <path d="M150 365 L150 545 330 425 330 605 510 375 510 555 690 440 690 620 870 380 870 560 1050 435 1050 615 1230 370 1230 550" />
          <path d="M150 545 L150 725 330 605 330 785 510 555 510 735 690 620 690 800 870 560 870 740 1050 615 1050 795 1230 550 1230 730" />
        </g>
        <g className="network-nodes network-nodes-secondary">
          <circle cx="150" cy="185" r="2.3" /><circle cx="330" cy="245" r="1.8" />
          <circle cx="510" cy="195" r="2.2" /><circle cx="690" cy="260" r="1.9" />
          <circle cx="870" cy="200" r="2.5" /><circle cx="1050" cy="255" r="2" />
          <circle cx="1230" cy="190" r="2.3" /><circle cx="150" cy="545" r="2" />
          <circle cx="330" cy="605" r="2.4" /><circle cx="510" cy="555" r="1.9" />
          <circle cx="690" cy="620" r="2.2" /><circle cx="870" cy="560" r="2" />
          <circle cx="1050" cy="615" r="2.5" /><circle cx="1230" cy="550" r="1.9" />
        </g>
      </svg>
    </div>
  );
}

export default BackgroundClickEffect;
