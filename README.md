# Upgradeable Register

This smart contract represents a simple register with load, increment and clear signals. In first implementation, register had only load signal. With upgrade, increment signal was added in next implementation. After the last upgrade, clear signal was added in the latest implementation. For upgrades OpenZeppelinTransparentProxy was used.

- Register (V1) ---> LOAD
- RegisterV2 ---> LOAD, INCREMENT
-   RegisterV3 ---> LOAD, INCREMENT, CLEAR
