import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export const Logo = () => {
  return (
    <View style={styles.container}>
      <Svg width="358" height="330" viewBox="0 0 358 330" fill="none">
        <Path
          d="M181.86 56.65H42.4901L42.1601 50.71C41.5001 41.69 48.1001 33.88 57.1201 33.11C57.6701 33.11 58.1101 33 58.6601 33.11H162.94C172.84 33.22 180.98 40.92 181.64 50.71L181.86 56.65Z"
          fill="white"
        />
        <Path
          d="M181.86 57.2H42.49C42.16 57.2 41.94 56.98 41.94 56.65L41.5 50.71C40.84 41.47 47.77 33.33 57.01 32.67C57.56 32.67 58 32.67 58.55 32.67H162.83C172.95 32.78 181.31 40.7 182.08 50.71L182.41 56.65C182.41 56.76 182.41 56.98 182.3 57.09C182.19 57.09 181.97 57.2 181.86 57.2ZM42.93 56.1H181.2L180.87 50.82C180.21 41.36 172.29 33.88 162.72 33.77H58.55C49.86 33.66 42.71 40.59 42.49 49.28C42.49 49.72 42.49 50.27 42.49 50.71L42.93 56.1Z"
          fill="#231F20"
        />
        <Path
          d="M196.16 287.43H56.68L42.49 56.87H181.86L196.16 287.43Z"
          fill="white"
        />
        <Path
          d="M196.16 287.98H56.6801C56.3501 287.98 56.1301 287.76 56.1301 287.43L41.8301 56.87C41.8301 56.76 41.8301 56.54 41.9401 56.43C42.0501 56.32 42.1601 56.21 42.3801 56.21H181.86C182.19 56.21 182.41 56.43 182.41 56.76L196.71 287.32C196.71 287.43 196.71 287.65 196.6 287.76C196.49 287.98 196.27 287.98 196.16 287.98ZM57.2301 286.88H195.5L181.31 57.42H43.0401L57.2301 286.88Z"
          fill="#231F20"
        />
        <Path
          d="M116.08 47.52H99.69C99.36 47.52 99.14 47.3 99.14 46.97C99.14 46.64 99.36 46.42 99.69 46.42H116.08C116.41 46.42 116.63 46.64 116.63 46.97C116.63 47.3 116.3 47.52 116.08 47.52Z"
          fill="#231F20"
        />
        <Path
          d="M123.56 47.52H119.82C119.49 47.52 119.27 47.3 119.27 46.97C119.27 46.64 119.49 46.42 119.82 46.42H123.56C123.89 46.42 124.11 46.64 124.11 46.97C124.11 47.3 123.78 47.52 123.56 47.52Z"
          fill="#231F20"
        />
        <Path
          d="M175.37 157.08H115.75C115.42 157.08 115.2 156.86 115.2 156.53L109.59 78.76C109.59 78.65 109.59 78.43 109.7 78.32C109.81 78.21 109.92 78.1 110.14 78.1H168.44C168.77 78.1 168.99 78.32 168.99 78.65L175.92 156.42C175.92 156.53 175.92 156.75 175.81 156.86C175.7 156.97 175.48 156.97 175.37 157.08ZM116.3 155.98H174.82L167.89 79.2H110.69L116.3 155.98Z"
          fill="#D1D3D4"
        />
        <Path
          d="M134.78 239.25C134.45 239.25 134.23 239.03 134.23 238.81C133.02 228.14 132.03 215.71 132.03 215.6C132.03 215.27 132.25 215.05 132.47 215.05C134.34 214.83 135.99 213.84 137.09 212.3C140.61 207.35 138.85 197.56 138.85 197.56C138.85 197.34 138.85 197.23 138.96 197.12C139.07 197.01 139.29 196.9 139.4 196.9L145.01 197.34C145.34 197.34 145.56 197.67 145.56 197.89C145.56 198 145.01 207.68 147.98 210.43C148.53 210.98 149.3 211.2 149.96 211.09C150.84 210.98 151.5 210.54 152.05 209.77C154.36 206.36 152.6 198.11 152.6 198C152.6 197.89 152.6 197.67 152.71 197.56C152.82 197.45 152.93 197.34 153.15 197.34H157.88C158.21 197.34 158.43 197.56 158.43 197.89C158.65 200.97 159.09 204.05 159.86 207.02C160.08 208.45 160.96 209.77 162.17 210.54C163.71 211.31 165.47 211.64 167.23 211.2C167.34 211.2 167.56 211.2 167.67 211.31C167.78 211.42 167.89 211.53 167.89 211.64C169.87 221.32 171.96 238.48 171.96 238.7C171.96 238.81 171.96 239.03 171.85 239.14C171.74 239.25 171.63 239.36 171.41 239.36L134.78 239.25ZM133.24 215.93C133.46 218.35 134.23 228.8 135.33 238.15L170.86 238.04C170.42 234.96 168.66 220.88 166.9 212.19C165.14 212.41 163.27 212.08 161.62 211.2C160.19 210.21 159.09 208.67 158.76 206.91C157.99 204.05 157.55 201.08 157.33 198.11H153.81C154.25 200.31 155.24 206.91 153.04 210.1C152.38 211.09 151.39 211.64 150.18 211.86C149.08 212.08 148.09 211.64 147.32 210.98C144.35 208.23 144.46 200.31 144.57 198.22L140.17 197.89C140.5 200.31 141.38 208.23 138.08 212.85C136.98 214.39 135.22 215.49 133.24 215.93Z"
          fill="#D1D3D4"
        />
        <Path
          d="M75.0501 242.44C74.7201 242.44 74.5001 242.22 74.5001 241.89L71.9701 201.85C71.9701 201.74 71.9701 201.52 72.0801 201.41C72.1901 201.3 72.3001 201.19 72.5201 201.19L110.14 200.97C110.47 200.97 110.69 201.19 110.69 201.41L114.98 241.12C114.98 241.23 114.98 241.45 114.87 241.56C114.76 241.67 114.65 241.78 114.43 241.78L100.13 242C99.9101 242 99.5801 241.78 99.5801 241.56L95.2901 223.41L93.7501 241.12C93.7501 241.45 93.5301 241.67 93.2001 241.67L75.0501 242.44ZM73.0701 202.4L75.6001 241.23L92.6501 240.57L94.5201 219.89C94.5201 219.67 94.7401 219.45 95.0701 219.45C95.2901 219.45 95.6201 219.56 95.6201 219.89L100.68 240.9L113.99 240.79L109.81 202.18L73.0701 202.4Z"
          fill="#D1D3D4"
        />
        <Path
          d="M73.18 206.8C72.85 206.8 72.63 206.58 72.63 206.25C72.63 205.92 72.85 205.7 73.18 205.7L110.03 205.15C110.36 205.15 110.58 205.37 110.58 205.59C110.58 205.59 110.58 205.59 110.58 205.7C110.58 206.03 110.36 206.25 110.03 206.25L73.18 206.8Z"
          fill="#D1D3D4"
        />
        <Path
          d="M95.5101 158.84H70.4301C67.4601 158.84 64.9301 156.42 64.8201 153.45C64.7101 150.59 66.8001 148.17 69.6601 148.06C69.7701 148.06 69.8801 148.06 69.9901 148.06H95.0701C98.0401 148.06 100.57 150.48 100.68 153.45C100.79 156.31 98.5901 158.73 95.8401 158.84C95.6201 158.84 95.6201 158.84 95.5101 158.84Z"
          fill="black"
          fill-opacity="0.2"
        />
        <Path
          d="M106.51 263.78H88.14C85.17 263.78 82.64 261.36 82.53 258.39C82.42 255.53 84.51 253.11 87.37 253C87.48 253 87.59 253 87.7 253H106.07C109.04 253 111.57 255.42 111.68 258.39C111.79 261.25 109.59 263.67 106.84 263.78C106.73 263.67 106.62 263.78 106.51 263.78Z"
          fill="#D1D3D4"
        />
        <Path
          d="M167.12 263.78H148.75C145.78 263.78 143.25 261.36 143.14 258.39C143.03 255.53 145.23 253.11 147.98 253C148.09 253 148.2 253 148.31 253H166.68C169.65 253 172.18 255.42 172.29 258.39C172.4 261.25 170.2 263.67 167.45 263.78C167.23 263.67 167.12 263.78 167.12 263.78Z"
          fill="#D1D3D4"
        />
        <Path
          d="M92.9801 80.3L59.8701 79.64C59.5401 79.64 59.3201 79.42 59.3201 79.09C59.3201 78.76 59.5401 78.54 59.8701 78.54L92.9801 79.2C93.3101 79.2 93.5301 79.42 93.5301 79.75C93.5301 80.08 93.3101 80.3 92.9801 80.3Z"
          fill="#D1D3D4"
        />
        <Path
          d="M93.64 91.3L60.53 90.64C60.2 90.64 59.98 90.42 59.98 90.09C59.98 89.76 60.2 89.54 60.53 89.54L93.64 90.2C93.97 90.2 94.19 90.42 94.19 90.75C94.19 91.08 93.97 91.3 93.64 91.3Z"
          fill="#D1D3D4"
        />
        <Path
          d="M94.3 102.3L61.19 101.64C60.86 101.64 60.64 101.42 60.64 101.09C60.64 100.76 60.86 100.54 61.19 100.54L94.3 101.2C94.63 101.2 94.85 101.42 94.85 101.75C94.85 102.08 94.63 102.3 94.3 102.3Z"
          fill="#D1D3D4"
        />
        <Path
          d="M95.07 113.41L61.96 112.75C61.63 112.75 61.41 112.53 61.41 112.2C61.41 111.87 61.63 111.65 61.85 111.65C61.85 111.65 61.85 111.65 61.96 111.65L95.07 112.31C95.4 112.31 95.62 112.53 95.62 112.86C95.62 113.19 95.29 113.41 95.07 113.41Z"
          fill="#D1D3D4"
        />
        <Path
          d="M95.7301 124.41L62.6201 123.75C62.2901 123.75 62.0701 123.53 62.0701 123.2C62.0701 122.87 62.2901 122.65 62.6201 122.65L95.7301 123.31C96.0601 123.31 96.2801 123.53 96.2801 123.86C96.2801 124.19 95.9501 124.41 95.7301 124.41Z"
          fill="#D1D3D4"
        />
        <Path
          d="M86.16 135.19L63.28 134.75C62.95 134.75 62.73 134.53 62.73 134.2C62.73 133.87 62.95 133.65 63.28 133.65L86.16 134.09C86.49 134.09 86.71 134.31 86.71 134.64C86.71 134.97 86.49 135.19 86.16 135.19Z"
          fill="#D1D3D4"
        />
        <Path
          d="M112.89 271.81L111.79 272.91L111.24 272.25L113 270.71H113.77L114.43 277.42H113.55L112.89 271.81Z"
          fill="#D1D3D4"
        />
        <Path
          d="M121.47 276.54L123.89 273.9C124 273.79 124 273.68 124.11 273.57C124.22 273.46 124.22 273.35 124.33 273.24C124.44 273.13 124.44 273.02 124.44 272.91C124.44 272.8 124.44 272.69 124.44 272.47C124.44 272.36 124.33 272.14 124.33 272.03C124.22 271.92 124.22 271.81 124.11 271.7C124 271.59 123.89 271.48 123.67 271.48C123.56 271.37 123.34 271.37 123.23 271.37C122.9 271.37 122.68 271.48 122.46 271.59C122.24 271.81 122.13 272.03 122.13 272.36L121.14 272.25C121.14 272.03 121.25 271.7 121.36 271.48C121.47 271.26 121.58 271.04 121.8 270.93C122.02 270.82 122.24 270.71 122.46 270.6C122.68 270.49 123.01 270.49 123.23 270.49C123.56 270.49 123.78 270.49 124.11 270.6C124.33 270.71 124.55 270.82 124.77 270.93C124.99 271.04 125.1 271.26 125.32 271.48C125.43 271.7 125.54 272.03 125.54 272.25C125.54 272.47 125.54 272.69 125.54 272.91C125.54 273.13 125.43 273.24 125.32 273.46C125.21 273.68 125.1 273.79 124.99 273.9L124.55 274.34L122.57 276.43L125.98 276.54L126.09 277.31L121.69 277.2L121.47 276.54Z"
          fill="#D1D3D4"
        />
        <Path
          d="M132.69 276.1C132.8 276.32 133.02 276.65 133.13 276.87C133.35 277.09 133.68 277.09 133.9 277.09C134.12 277.09 134.23 277.09 134.34 276.98C134.45 276.98 134.56 276.87 134.78 276.76C134.89 276.65 135 276.54 135 276.43C135.11 276.32 135.11 276.1 135.11 275.99C135.11 275.77 135 275.55 134.89 275.33C134.78 275.11 134.56 275 134.45 274.89C134.23 274.78 134.01 274.78 133.79 274.78C133.57 274.78 133.35 274.78 133.13 274.78L133.02 274.01C133.35 274.01 133.57 274.01 133.9 273.9C134.12 273.9 134.23 273.79 134.34 273.68C134.45 273.57 134.56 273.46 134.56 273.35C134.56 273.24 134.56 273.02 134.56 272.91C134.56 272.58 134.45 272.25 134.12 272.14C133.9 271.92 133.57 271.81 133.24 271.81C133.02 271.81 132.8 271.92 132.58 272.03C132.36 272.14 132.25 272.36 132.14 272.58L131.15 272.25C131.26 271.81 131.48 271.48 131.81 271.26C132.14 271.04 132.58 270.93 133.02 270.93C133.24 270.93 133.57 270.93 133.79 271.04C134.01 271.15 134.23 271.26 134.45 271.37C134.67 271.48 134.78 271.7 135 271.92C135.11 272.14 135.22 272.47 135.22 272.69C135.33 273.35 134.89 274.01 134.23 274.23C134.45 274.23 134.67 274.34 134.78 274.45C135 274.56 135.11 274.67 135.22 274.89C135.33 275 135.44 275.22 135.55 275.44C135.66 275.66 135.66 275.88 135.66 275.99C135.66 276.32 135.66 276.54 135.55 276.87C135.44 277.09 135.33 277.31 135.11 277.53C134.89 277.64 134.67 277.86 134.45 277.86C134.23 277.97 133.9 277.97 133.57 277.97C133.13 277.97 132.58 277.86 132.25 277.64C131.81 277.42 131.48 276.98 131.37 276.54L132.69 276.1Z"
          fill="#D1D3D4"
        />
        <Path
          d="M144.79 276.43H141.93L141.82 275.44L144.13 271.15H145.23L145.67 275.55H146.66L146.77 276.32H145.78L145.89 277.75H144.9L144.79 276.43ZM144.46 272.25L142.7 275.55H144.79L144.46 272.25Z"
          fill="#D1D3D4"
        />
        <Path
          d="M117.18 280.17L111.79 280.06C111.46 280.06 111.13 279.73 111.13 279.4C111.13 279.07 111.24 278.85 111.57 278.74H111.68L117.07 278.85C117.4 278.85 117.73 279.18 117.73 279.51C117.84 279.84 117.62 280.06 117.18 280.17Z"
          fill="#D1D3D4"
        />
        <Path
          d="M142.26 105.71C142.26 105.71 136.21 105.05 128.62 110C121.03 114.95 110.25 121.44 110.25 121.44C110.25 121.44 111.02 121.99 114.43 131.67L128.4 126.83C128.4 126.83 129.94 141.68 130.6 148.28L106.29 185.68C106.29 185.68 113.88 192.06 120.26 187.44C120.26 187.44 121.8 194.04 126.97 193.16C132.14 192.28 133.9 188.87 133.9 188.87C133.9 188.87 135.66 194.37 139.95 193.71C144.24 193.05 146.55 188.65 146.55 188.65C146.55 188.65 148.75 194.37 154.14 193.49C157.33 192.94 159.97 190.52 160.85 187.44C160.85 187.44 166.79 198.88 178.67 186.23L163.05 148.28L166.13 126.28L176.03 134.09C176.03 134.09 182.74 134.64 181.2 125.95C181.2 125.95 168.44 109.67 162.61 106.92C156.78 104.17 142.26 105.71 142.26 105.71Z"
          fill="#34C759"
        />
        <Path
          d="M139.29 194.26C136.54 194.26 134.67 191.84 133.79 189.97C132.14 191.95 129.72 193.27 127.08 193.71C123.01 194.37 120.7 190.85 119.93 188.32C113.44 192.39 105.96 186.23 105.85 186.12C105.63 185.9 105.63 185.68 105.74 185.35L129.94 148.17C129.39 142.34 128.18 130.57 127.85 127.6L114.54 132.22C114.21 132.33 113.99 132.11 113.88 131.89C110.69 122.98 109.92 121.88 109.81 121.88C109.7 121.77 109.59 121.66 109.59 121.44C109.59 121.22 109.7 121.11 109.92 121C110.03 121 120.7 114.51 128.29 109.56C135.88 104.61 141.6 105.05 142.26 105.16C143.36 105.05 157.11 103.73 162.94 106.48C168.77 109.23 181.2 124.96 181.75 125.73C181.75 125.84 181.86 125.84 181.86 125.95C182.41 129.03 181.97 131.45 180.65 132.99C179.44 134.2 177.79 134.86 176.14 134.75C176.03 134.75 175.92 134.64 175.81 134.64L166.68 127.49L163.71 148.39L179.33 186.12C179.44 186.34 179.33 186.56 179.22 186.67C174.93 191.18 170.86 193.27 167.23 192.72C164.7 192.28 162.5 190.85 161.07 188.76C159.86 191.62 157.33 193.6 154.25 194.15C149.96 194.81 147.43 191.51 146.44 189.86C145.01 192.17 142.7 193.71 139.95 194.26C139.84 194.15 139.51 194.15 139.29 194.26ZM133.9 188.21C134.12 188.21 134.34 188.43 134.34 188.65C134.45 188.87 135.99 193.71 139.73 193.16C143.69 192.5 145.89 188.43 145.89 188.43C146 188.21 146.22 188.1 146.44 188.1C146.66 188.1 146.88 188.21 146.88 188.43C146.99 188.65 149.08 193.71 153.92 192.94C156.89 192.39 159.31 190.19 160.19 187.33C160.3 187.11 160.41 187 160.63 186.89C160.85 186.89 161.07 187 161.18 187.22C161.18 187.22 163.16 191.07 167.12 191.62C170.31 192.06 173.94 190.19 177.9 186.12L162.5 148.5C162.5 148.39 162.5 148.28 162.5 148.17L165.58 126.17C165.58 125.95 165.69 125.84 165.91 125.73C166.13 125.62 166.35 125.73 166.46 125.84L176.14 133.54C177.46 133.54 178.67 133.1 179.66 132.11C180.76 130.9 181.09 128.81 180.65 126.17C179.55 124.74 167.78 110 162.28 107.36C156.56 104.72 142.26 106.15 142.04 106.26H141.93C141.93 106.26 135.99 105.71 128.62 110.55C122.02 114.95 112.89 120.34 110.69 121.66C112.12 124.74 113.33 127.82 114.43 131.01L127.96 126.39C128.07 126.28 128.29 126.28 128.4 126.39C128.51 126.5 128.62 126.61 128.62 126.83C128.62 126.94 130.27 141.79 130.82 148.28C130.82 148.39 130.82 148.5 130.71 148.61L106.62 185.57C108.16 186.78 114.43 190.74 119.6 187C119.82 186.78 120.15 186.89 120.37 187.11C120.37 187.22 120.48 187.22 120.48 187.33C120.59 187.55 122.02 193.38 126.64 192.61C131.48 191.84 133.13 188.65 133.13 188.54C133.57 188.32 133.68 188.21 133.9 188.21Z"
          fill="#231F20"
        />
        <Path
          d="M138.74 108.79C138.41 108.79 138.19 108.57 138.19 108.24C138.19 108.13 138.19 108.02 138.3 107.91C142.04 103.95 149.63 101.42 151.28 100.98C151.72 99.66 151.61 98.12 150.95 96.91C150.62 96.36 150.29 95.92 149.85 95.48C148.75 94.16 147.43 92.4 147.76 90.64C148.2 89.21 149.19 88 150.51 87.45C151.28 86.9 152.38 86.79 153.26 87.12C155.02 87.89 155.68 90.53 155.68 90.64C155.79 90.97 155.57 91.3 155.24 91.3C154.91 91.41 154.58 91.19 154.58 90.86C154.47 90.2 153.81 88.55 152.82 88.11C152.27 87.89 151.61 88 151.06 88.33C149.96 88.77 149.19 89.65 148.86 90.75C148.64 92.07 149.74 93.5 150.73 94.71C151.17 95.26 151.5 95.7 151.94 96.25C152.71 97.9 152.82 99.77 152.27 101.53C152.27 101.75 152.05 101.86 151.94 101.86C151.83 101.86 143.03 104.5 139.18 108.68C138.96 108.79 138.85 108.79 138.74 108.79Z"
          fill="#231F20"
        />
        <Path
          d="M161.95 110.22C161.73 110.22 161.62 110.11 161.51 110C159.09 106.37 155.57 103.51 151.5 101.86C151.17 101.75 151.06 101.42 151.17 101.2C151.28 100.87 151.61 100.76 151.83 100.87C156.12 102.63 159.86 105.6 162.39 109.45C162.5 109.67 162.5 110 162.17 110.22C162.17 110.22 162.06 110.22 161.95 110.22Z"
          fill="#231F20"
        />
        <Path
          d="M150.29 114.18C149.3 114.18 148.31 114.07 147.32 113.96C137.31 112.64 136.65 106.59 136.54 106.37C136.54 106.04 136.76 105.82 136.98 105.82C137.31 105.82 137.53 106.04 137.64 106.26C137.64 106.48 138.3 111.65 147.43 112.86C153.15 113.52 158.98 111.98 163.49 108.46C163.71 108.24 164.04 108.24 164.26 108.57C164.48 108.79 164.48 109.12 164.15 109.34C160.3 112.42 155.35 114.18 150.29 114.18Z"
          fill="#231F20"
        />
        <Path
          d="M217.61 100.43C217.61 100.43 212.44 112.42 213.98 113.63C215.52 114.84 219.48 113.96 219.48 113.96"
          fill="white"
        />
        <Path
          d="M216.62 114.73C215.52 114.84 214.53 114.51 213.65 113.96C212 112.64 215.19 104.72 217.17 100.1C217.28 99.77 217.61 99.66 217.83 99.77C218.16 99.88 218.27 100.21 218.16 100.43V100.54C215.52 106.59 213.76 112.31 214.31 113.08C215.41 113.96 218.27 113.52 219.37 113.3C219.7 113.19 219.92 113.41 220.03 113.74C220.14 114.07 219.92 114.29 219.59 114.4C218.6 114.62 217.61 114.73 216.62 114.73Z"
          fill="#231F20"
        />
        <Path
          d="M234.99 133.76L231.91 127.38C231.91 127.38 226.96 130.9 221.68 122.98C216.4 115.06 215.3 84.15 215.3 84.15C215.3 84.15 229.05 103.51 232.9 100.32C232.13 94.71 235.32 91.19 239.28 98.12C242.36 103.51 236.31 106.81 236.31 106.81L241.37 125.95"
          fill="white"
        />
        <Path
          d="M234.99 134.31C234.77 134.31 234.55 134.2 234.55 133.98L231.8 128.15C230.59 128.7 229.38 128.81 228.06 128.59C225.64 128.15 223.44 126.39 221.35 123.2C216.07 115.17 214.97 85.36 214.97 84.04C214.97 83.82 215.08 83.6 215.3 83.49C215.52 83.38 215.74 83.49 215.96 83.71C219.04 88.11 227.95 99.44 231.91 99.99C232.13 99.99 232.35 99.99 232.57 99.99C232.24 96.8 233.01 94.38 234.66 93.83C235.65 93.5 237.52 93.61 239.94 97.79C240.82 99.22 241.15 100.98 240.71 102.63C240.05 104.5 238.84 106.04 237.19 107.03L242.25 125.84C242.36 126.17 242.14 126.39 241.81 126.5C241.48 126.61 241.26 126.39 241.15 126.06L235.98 106.92C235.87 106.7 235.98 106.37 236.2 106.26C237.74 105.38 238.95 103.95 239.5 102.19C239.83 100.87 239.61 99.33 238.84 98.23C237.41 95.7 235.87 94.38 234.88 94.71C233.89 95.04 233.12 97.02 233.56 99.99C233.56 100.21 233.45 100.32 233.34 100.54C232.79 100.87 232.24 101.09 231.58 100.98C227.29 100.32 218.93 89.65 215.96 85.69C216.29 92.4 217.72 115.72 222.12 122.43C223.99 125.29 225.97 126.94 228.06 127.27C229.27 127.49 230.48 127.27 231.58 126.61C231.69 126.5 231.91 126.5 232.02 126.5C232.13 126.5 232.35 126.61 232.35 126.83L235.43 133.21C235.54 133.43 235.43 133.76 235.21 133.98C235.1 134.31 234.99 134.31 234.99 134.31Z"
          fill="#231F20"
        />
        <Path
          d="M221.339 103.264C221.882 103.204 222.177 101.834 221.997 100.203C221.816 98.5731 221.23 97.3002 220.686 97.3603C220.143 97.4204 219.848 98.7907 220.029 100.421C220.209 102.051 220.796 103.324 221.339 103.264Z"
          fill="#231F20"
        />
        <Path
          d="M294.5 178.53C294.17 178.53 293.95 178.31 293.95 178.09C293.95 177.76 294.17 177.54 294.39 177.43C306.82 175.89 317.49 166.32 319.14 155.21C319.8 150.48 319.14 145.31 317.16 139.37C315.51 134.2 312.65 129.36 309.02 125.4C303.08 119.46 295.16 116.6 287.35 113.85C283.39 112.53 279.43 110.99 275.69 109.23C266.67 104.83 263.26 97.9 259.63 90.53C257.98 87.12 256.22 83.82 254.13 80.63C246.65 69.08 231.36 65.78 219.81 73.26C219.7 73.37 219.59 73.37 219.48 73.48L218.38 74.14C217.28 74.91 216.07 75.68 214.75 76.23C214.2 76.45 213.65 76.56 213.1 76.78C212.66 76.89 212.11 77 211.67 77.22C206.72 79.09 204.08 84.59 205.95 89.54C206.94 92.4 209.25 94.6 212.22 95.48C212.55 95.59 212.66 95.92 212.66 96.14C212.55 96.47 212.22 96.58 212 96.58C206.39 94.82 203.2 88.88 204.85 83.27C205.84 80.08 208.26 77.55 211.34 76.34C211.78 76.12 212.33 76.01 212.88 75.9C213.43 75.79 213.87 75.57 214.42 75.46C215.63 74.91 216.73 74.25 217.83 73.48L218.93 72.82C230.81 64.9 246.98 68.09 254.9 79.97C255.01 80.08 255.01 80.19 255.12 80.3C257.21 83.49 259.08 86.9 260.73 90.42C264.47 97.9 267.66 104.28 276.35 108.57C280.09 110.33 283.94 111.87 287.9 113.19C295.71 115.94 303.85 118.91 309.9 125.07C313.75 129.14 316.61 134.09 318.37 139.48C320.46 145.64 321.23 150.92 320.46 155.76C318.59 166.98 307.48 176.88 294.5 178.53Z"
          fill="#231F20"
        />
        <Path
          d="M231.47 165C231.47 165 219.7 166.43 195.39 148.61C171.08 130.79 163.16 99.33 161.62 97.68C160.08 96.03 159.42 95.92 157.33 95.59C154.69 95.15 152.38 93.61 150.84 91.3C150.62 91.08 150.51 90.75 150.62 90.42C150.73 89.98 151.17 89.65 151.72 89.65C152.16 89.76 152.71 89.87 153.15 90.2C154.03 90.64 155.02 90.86 156.12 90.97C156.45 90.97 156.78 90.97 157.11 90.75C157.66 90.42 157.88 89.76 157.88 89.1C157.88 87.01 156.56 83.27 153.81 84.48C152.82 84.92 152.27 85.91 152.38 87.01C152.49 87.23 152.49 87.56 152.38 87.78C152.16 88.11 151.83 88.22 151.5 88.11C149.63 88 148.2 86.35 148.42 84.48C148.53 82.61 150.18 81.18 152.05 81.4C152.16 81.4 152.27 81.4 152.49 81.51L148.86 80.74C148.09 80.63 147.32 80.41 146.55 79.97C145.89 79.53 145.45 78.76 145.56 77.88C145.67 77.44 145.89 77.11 146.11 76.78C147.54 75.24 149.85 74.91 151.94 74.69C155.35 74.36 158.87 74.03 162.17 75.02C168.77 77 172.07 82.28 175.37 87.89C185.71 106.04 201 121 219.37 130.9C227.62 135.3 236.97 139.04 246.32 138.38"
          fill="white"
        />
        <Path
          d="M230.7 165.55C227.62 165.55 215.96 164.34 195.06 148.94C175.15 134.2 166.02 110.33 162.61 101.42C162.17 100.21 161.73 99.11 161.18 98.01C159.86 96.58 159.31 96.47 157.33 96.14H157.22C154.36 95.7 151.94 94.05 150.4 91.63C150.18 91.3 150.07 90.86 150.07 90.42C150.18 89.65 150.95 89.1 151.72 89.1C152.16 89.21 152.71 89.32 153.04 89.54L153.26 89.65C154.14 90.09 155.02 90.31 156.01 90.31C156.23 90.31 156.45 90.31 156.67 90.2C157.11 89.98 157.11 89.32 157.11 89.1C157.11 87.67 156.45 85.69 155.46 85.03C155.02 84.7 154.36 84.7 153.81 85.03C153.04 85.36 152.6 86.13 152.71 87.01V87.12C152.82 87.45 152.71 87.78 152.6 88.11C152.27 88.66 151.72 88.88 151.17 88.77C148.97 88.66 147.43 86.79 147.54 84.59C147.65 83.38 148.2 82.28 149.19 81.62L149.41 81.51L148.31 81.29C147.43 81.18 146.55 80.85 145.78 80.41C144.9 79.86 144.46 78.87 144.57 77.77C144.68 77.33 144.9 76.78 145.34 76.45C146.88 74.8 149.3 74.36 151.5 74.14C155.24 73.7 158.65 73.48 161.95 74.47C168.55 76.45 171.85 81.4 175.48 87.56C185.82 105.71 201 120.45 219.37 130.35C226.63 134.2 236.31 138.49 245.99 137.72C246.32 137.72 246.54 137.94 246.54 138.16C246.54 138.49 246.32 138.71 245.99 138.71C235.98 139.48 226.19 135.08 218.71 131.23C200.23 121.22 184.83 106.26 174.38 88C170.86 81.95 167.78 77.22 161.51 75.35C158.43 74.47 155.13 74.69 151.5 75.02C149.41 75.24 147.32 75.57 146 77C145.78 77.22 145.67 77.44 145.56 77.77C145.56 78.32 145.78 78.98 146.33 79.31C146.99 79.64 147.65 79.86 148.42 79.97L152.05 80.74C152.38 80.85 152.49 81.07 152.49 81.4C152.38 81.73 152.16 81.84 151.83 81.84C150.29 81.51 148.86 82.5 148.53 84.04C148.31 84.92 148.53 85.69 149.08 86.35C149.52 87.01 150.29 87.34 151.06 87.45C151.17 87.45 151.28 87.45 151.5 87.45C151.5 87.34 151.5 87.23 151.5 87.12V87.01C151.39 85.69 152.05 84.48 153.26 83.93C154.14 83.49 155.13 83.49 155.9 84.04C157.44 85.03 158.1 87.67 158.1 88.99C158.21 89.87 157.77 90.64 157.11 91.08C156.67 91.3 156.23 91.3 155.79 91.3C154.69 91.3 153.59 90.97 152.6 90.53L152.38 90.42C152.05 90.2 151.72 90.09 151.39 90.09C151.17 90.09 150.84 90.2 150.84 90.31C150.84 90.42 150.95 90.64 151.06 90.75C152.38 92.84 154.58 94.38 157.11 94.82H157.22C159.31 95.15 160.19 95.26 161.73 97.02C162.39 98.23 162.94 99.44 163.38 100.76C166.79 109.67 175.81 133.32 195.39 147.84C219.04 165.33 230.92 164.12 231.03 164.12C231.36 164.12 231.58 164.23 231.58 164.56C231.58 164.89 231.36 165.11 231.14 165.22C231.25 165.55 230.92 165.55 230.7 165.55Z"
          fill="#231F20"
        />
        <Path
          d="M179.88 204.71C178.56 202.95 159.09 162.36 159.09 162.36L180.65 162.8L199.68 200.86L179.88 204.71Z"
          fill="#231F20"
        />
        <Path
          d="M179.88 205.26C179.66 205.26 179.55 205.15 179.44 205.04C178.12 203.28 159.42 164.23 158.65 162.58C158.54 162.47 158.54 162.25 158.65 162.03C158.76 161.92 158.98 161.81 159.09 161.81L180.65 162.25C180.87 162.25 181.09 162.36 181.09 162.58L200.12 200.64C200.23 200.75 200.23 200.97 200.12 201.08C200.01 201.19 199.9 201.3 199.68 201.41L179.88 205.26ZM160.08 162.91C165.47 174.24 178.34 200.86 180.21 204.05L199.02 200.31L180.43 163.24L160.08 162.91Z"
          fill="#231F20"
        />
        <Path
          d="M180.32 199.43L163.05 164.78L179.77 165.55L195.06 197.78L180.32 199.43Z"
          fill="white"
        />
        <Path
          d="M299.56 217.69C299.56 217.69 315.07 236.72 314.74 251.35C314.41 265.98 310.89 269.06 310.89 269.06L314.63 288.42L234 288.64L238.62 237.49L299.56 217.69Z"
          fill="#231F20"
        />
        <Path
          d="M233.89 289.3C233.78 289.3 233.56 289.19 233.45 289.08C233.34 288.97 233.34 288.86 233.34 288.64L237.96 237.49C237.96 237.27 238.18 237.05 238.29 237.05L299.34 217.14C299.56 217.03 299.78 217.14 299.89 217.36C300.55 218.13 315.62 236.72 315.18 251.46C314.74 264.22 312.1 268.4 311.33 269.28L315.07 288.42C315.07 288.53 315.07 288.75 314.96 288.86C314.85 288.97 314.74 289.08 314.52 289.08L233.89 289.3ZM238.95 238.04L234.44 288.2L313.86 287.98L310.23 269.17C310.23 268.95 310.23 268.73 310.45 268.62C310.45 268.62 313.75 265.43 314.19 251.24C314.63 237.93 301.32 220.66 299.45 218.24L238.95 238.04Z"
          fill="#231F20"
        />
        <Path
          d="M233.78 242.33C233.78 242.33 231.8 240.24 230.15 211.09C228.5 181.94 213.21 182.16 219.04 152.57C224.32 125.95 242.91 124.52 255.01 125.95C280.86 129.03 274.59 161.04 304.84 219.45C304.73 219.45 285.7 257.29 233.78 242.33Z"
          fill="black"
          fill-opacity="0.2"
        />
        <Path
          d="M229.82 163.68C230.7 163.68 236.31 187.99 235.54 192.17C234.66 196.68 221.68 195.69 218.71 195.69C214.42 195.69 201.99 196.9 198.36 194.7C195.28 192.83 191.76 190.63 189.34 187.99C187.36 185.9 185.82 183.37 183.73 181.17C182.85 180.18 181.97 179.41 180.87 178.75C179.88 178.31 178.67 177.87 177.57 177.76C177.02 177.54 176.36 177.65 175.81 177.87C175.26 178.2 175.04 178.86 175.15 179.52C175.26 180.18 175.48 180.73 175.81 181.28C176.47 182.6 180.32 187.88 179.55 189.2C178.78 190.52 172.4 189.09 170.86 188.87C166.79 188.43 165.8 192.06 166.57 195.36C168.22 202.62 177.35 205.81 183.4 208.45C190.88 211.75 198.69 214.28 206.61 216.04C218.6 218.57 230.7 220 242.91 220.22C250.94 220.55 263.81 220.66 268.32 212.41C277.23 196.46 261.94 156.75 261.94 156.75"
          fill="white"
        />
        <Path
          d="M247.42 220.99C245.66 220.99 244.12 220.88 242.91 220.88C230.7 220.55 218.38 219.23 206.39 216.59C198.36 214.83 190.55 212.3 183.07 209L181.2 208.12C175.04 205.48 167.45 202.18 166.02 195.47C165.36 193.49 165.8 191.29 167.01 189.53C168 188.43 169.54 187.99 170.97 188.21C171.3 188.21 171.85 188.32 172.51 188.43C174.05 188.65 178.56 189.53 179.11 188.76C179.66 187.99 177.02 184.03 176.25 182.82C175.92 182.27 175.59 181.72 175.37 181.5C175.04 180.95 174.82 180.29 174.71 179.52C174.6 178.64 174.93 177.87 175.59 177.43C176.25 177.1 177.02 176.99 177.79 177.32C180.32 177.54 182.63 178.86 184.28 180.84C185.38 181.94 186.37 183.15 187.36 184.47C188.13 185.57 189.01 186.56 190 187.66C192.53 190.08 195.39 192.17 198.36 193.93L198.91 194.26C201.55 195.91 209.47 195.58 214.86 195.25C216.51 195.14 217.94 195.14 218.93 195.14H220.36C224.21 195.25 234.66 195.58 235.32 192.06C235.98 188.21 230.81 165.88 229.82 164.12C229.71 164.01 229.6 163.79 229.6 163.68C229.6 163.35 229.82 163.13 230.15 163.13C230.37 163.13 230.48 163.24 230.7 163.35C231.91 164.78 237.19 187.99 236.42 192.17C235.54 196.68 225.31 196.35 220.36 196.13H218.93C217.94 196.13 216.51 196.24 214.86 196.24C209.14 196.46 201.22 196.9 198.36 195.03L197.81 194.7C194.73 192.94 191.76 190.74 189.23 188.21C188.24 187.22 187.36 186.01 186.59 185.02C185.71 183.81 184.72 182.6 183.62 181.5C182.85 180.62 181.86 179.85 180.87 179.19C179.88 178.75 178.78 178.42 177.68 178.2C177.24 178.09 176.8 178.09 176.36 178.2C176.03 178.42 175.92 178.86 175.92 179.3C176.03 179.85 176.25 180.4 176.47 180.84C176.58 181.06 176.91 181.61 177.24 182.16C179.22 185.35 180.87 188.1 180.1 189.31C179.33 190.52 176.14 190.19 172.4 189.53C171.74 189.42 171.19 189.31 170.86 189.31C169.76 189.09 168.66 189.42 167.78 190.3C166.79 191.73 166.57 193.6 167.01 195.25C168.44 201.41 175.7 204.6 181.64 207.13C182.3 207.35 182.96 207.68 183.51 208.01C190.99 211.31 198.69 213.84 206.61 215.49C218.6 218.02 230.7 219.45 242.91 219.67C249.51 219.89 263.26 220.44 267.88 212.19C276.57 196.57 261.61 157.41 261.5 157.08C261.39 156.75 261.5 156.53 261.83 156.42C262.16 156.31 262.38 156.42 262.49 156.75C263.15 158.4 277.67 196.79 268.76 212.85C264.8 219.89 254.68 220.99 247.42 220.99Z"
          fill="#231F20"
        />
        <Path
          d="M260.51 151.69C260.29 151.69 260.07 151.58 259.96 151.36L252.81 135.74C252.7 135.52 252.81 135.19 253.03 134.97C253.36 134.86 253.58 134.97 253.8 135.19L260.95 150.7C261.06 150.92 260.95 151.25 260.73 151.47C260.73 151.69 260.62 151.69 260.51 151.69Z"
          fill="#231F20"
        />
        <Path
          d="M202.21 229.24C201.88 229.13 201.66 228.91 201.66 228.58C201.88 227.26 208.59 196.02 221.79 194.48C222.12 194.48 222.34 194.7 222.45 194.92C222.45 195.25 222.23 195.47 222.01 195.58C209.58 197.01 202.87 228.58 202.87 228.8C202.65 229.13 202.43 229.24 202.21 229.24Z"
          fill="#231F20"
        />
        <Path
          d="M228.5 231.88C228.17 231.88 227.95 231.66 227.95 231.33C227.95 231.22 228.28 223.41 227.07 219.89C226.96 219.56 227.18 219.34 227.4 219.23C227.62 219.12 227.95 219.23 228.06 219.56C229.38 223.3 229.05 231.11 229.05 231.44C229.05 231.66 228.83 231.88 228.5 231.88Z"
          fill="#231F20"
        />
        <Path
          d="M185.38 225.72C186.7 225.28 251.05 235.51 251.05 235.51L249.73 304.37L166.79 291.83L185.38 225.72Z"
          fill="#007AFF"
        />
        <Path
          d="M249.73 305.03L166.68 292.49C166.57 292.49 166.35 292.38 166.35 292.27C166.24 292.16 166.24 291.94 166.24 291.83L184.83 225.72C184.83 225.5 185.05 225.39 185.16 225.39C186.48 224.95 235.98 232.76 251.16 235.18C251.38 235.18 251.6 235.51 251.6 235.73L250.28 304.59C250.28 304.7 250.17 304.92 250.06 305.03C250.06 304.92 249.84 305.03 249.73 305.03ZM167.45 291.5L249.18 303.82L250.5 236.06C225.97 232.21 189.89 226.6 185.82 226.38L167.45 291.5Z"
          fill="#231F20"
        />
        <Path
          d="M220.36 118.8C220.03 118.8 219.81 118.8 219.81 118.8C219.48 118.8 219.26 118.47 219.37 118.14C219.37 117.81 219.7 117.59 220.03 117.7C220.25 117.7 226.41 118.47 228.39 109.78C228.5 109.45 228.72 109.34 229.05 109.34C229.38 109.45 229.49 109.67 229.49 110C227.51 118.14 222.01 118.8 220.36 118.8Z"
          fill="#231F20"
        />
        <Path
          d="M277.67 285.67C277.45 285.67 277.23 285.56 277.23 285.23L268.98 248.93C268.87 248.71 269.09 248.38 269.31 248.38C269.53 248.27 269.86 248.49 269.86 248.71L278.11 285.01C278.22 285.23 278 285.56 277.78 285.56L277.67 285.67Z"
          fill="white"
        />
        <Path
          d="M275.25 258.39C275.14 258.39 275.03 258.39 274.92 258.28C274.7 258.06 274.7 257.84 274.92 257.62C274.92 257.51 279.76 251.9 278.88 246.07C278.88 245.85 278.99 245.52 279.32 245.52C279.54 245.52 279.87 245.63 279.87 245.96C280.75 252.34 275.8 258.06 275.58 258.28C275.47 258.28 275.36 258.39 275.25 258.39Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
