export const samplePayload = {
    ID: 1308,
    Amount: 12580,
    Currency: "NGN",
    CustomerEmail: "anon8@customers.io",
    SplitInfo: [
        {
            SplitType: "FLAT",
            SplitValue: 45,
            SplitEntityId: "LNPYACC0019"
        },
        {
            SplitType: "RATIO",
            SplitValue: 3,
            SplitEntityId: "LNPYACC0011"
        },
        {
            SplitType: "PERCENTAGE",
            SplitValue: 3,
            SplitEntityId: "LNPYACC0015"
        }
    ]
}

export const samplePayloadResponse = {
    ID: 1308,
    Balance: 0,
    SplitBreakdown: [
        {
            SplitEntityId: "LNPYACC0019",
            Amount: 5000
        },
        {
            SplitEntityId: "LNPYACC0011",
            Amount: 2000
        },
        {
            SplitEntityId: "LNPYACC0015",
            Amount: 2000
        }
    ]
}

export const requirementI = {
    ID: 13082,
    Amount: 4500,
    Currency: "NGN",
    CustomerEmail: "anon8@customers.io",
    SplitInfo: [
        {
            SplitType: "FLAT",
            SplitValue: 450,
            SplitEntityId: "LNPYACC0019"
        },
        {
            "SplitType": "FLAT",
            "SplitValue": 2300,
            "SplitEntityId": "LNPYACC0011"
        }
    ]
}