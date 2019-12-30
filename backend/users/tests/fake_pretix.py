FAKE_PRETIX_ITEMS = {
    "count": 2,
    "next": None,
    "previous": None,
    "results": [
        {
            "id": 1,
            "category": 1,
            "name": {"en": "Regular ticket", "it": "Ticket base"},
            "internal_name": None,
            "active": True,
            "sales_channels": ["web"],
            "description": None,
            "default_price": "2000.00",
            "free_price": False,
            "tax_rate": "0.00",
            "tax_rule": None,
            "admission": True,
            "position": 0,
            "picture": None,
            "available_from": None,
            "available_until": None,
            "require_voucher": False,
            "hide_without_voucher": False,
            "allow_cancel": True,
            "require_bundling": False,
            "min_per_order": None,
            "max_per_order": None,
            "checkin_attention": False,
            "has_variations": False,
            "variations": [],
            "addons": [],
            "bundles": [],
            "original_price": None,
            "require_approval": False,
            "generate_tickets": None,
            "show_quota_left": None,
            "hidden_if_available": None,
            "allow_waitinglist": True,
            "issue_giftcard": False,
        },
        {
            "id": 2,
            "category": 1,
            "name": {"en": "Reduced ticket"},
            "internal_name": None,
            "active": True,
            "sales_channels": ["web"],
            "description": None,
            "default_price": "1000.00",
            "free_price": False,
            "tax_rate": "0.00",
            "tax_rule": None,
            "admission": True,
            "position": 1,
            "picture": None,
            "available_from": None,
            "available_until": None,
            "require_voucher": False,
            "hide_without_voucher": False,
            "allow_cancel": True,
            "require_bundling": False,
            "min_per_order": None,
            "max_per_order": None,
            "checkin_attention": False,
            "has_variations": False,
            "variations": [],
            "addons": [],
            "bundles": [],
            "original_price": None,
            "require_approval": False,
            "generate_tickets": None,
            "show_quota_left": None,
            "hidden_if_available": None,
            "allow_waitinglist": True,
            "issue_giftcard": False,
        },
    ],
}

FAKE_PRETIX_ORDER = {
    "code": "A5AFZ",
    "status": "n",
    "testmode": True,
    "secret": "AAAAAAAAAAAA",
    "email": "user-email@fake.it",
    "locale": "en",
    "datetime": "2019-11-30T17:32:16.692972Z",
    "expires": "2019-12-16T23:59:59Z",
    "payment_date": None,
    "payment_provider": "banktransfer",
    "fees": [],
    "total": "3000.00",
    "comment": "",
    "invoice_address": {
        "last_modified": "2019-11-30T17:32:16.715980Z",
        "is_business": False,
        "company": "",
        "name": "",
        "name_parts": {"_scheme": "full"},
        "street": "",
        "zipcode": "",
        "city": "",
        "country": "",
        "state": "",
        "vat_id": "",
        "vat_id_validated": False,
        "internal_reference": "",
    },
    "positions": [
        {
            "id": 10,
            "order": "U0FPN",
            "positionid": 1,
            "item": 1,
            "variation": None,
            "price": "2000.00",
            "attendee_name": "Jake",
            "attendee_name_parts": {"_scheme": "full", "full_name": "Jake"},
            "attendee_email": None,
            "voucher": None,
            "tax_rate": "0.00",
            "tax_value": "0.00",
            "addon_to": None,
            "secret": "AAAAAA",
            "subevent": None,
            "checkins": [],
            "downloads": [],
            "answers": [
                {
                    "question": 1,
                    "answer": "2",
                    "question_identifier": "userid",
                    "options": [],
                    "option_identifiers": [],
                }
            ],
            "tax_rule": None,
            "pseudonymization_id": "AAAAAAAAA",
            "seat": None,
        },
        {
            "id": 11,
            "order": "U0FPN",
            "positionid": 2,
            "item": 2,
            "variation": None,
            "price": "1000.00",
            "attendee_name": "Jack",
            "attendee_name_parts": {"_scheme": "full", "full_name": "Jack"},
            "attendee_email": None,
            "voucher": None,
            "tax_rate": "0.00",
            "tax_value": "0.00",
            "secret": "AAAAAA",
            "addon_to": None,
            "subevent": None,
            "checkins": [],
            "downloads": [],
            "answers": [
                {
                    "question": 1,
                    "answer": "2",
                    "question_identifier": "userid",
                    "options": [],
                    "option_identifiers": [],
                }
            ],
            "tax_rule": None,
            "pseudonymization_id": "BBBBBBBB",
            "seat": None,
        },
    ],
    "downloads": [],
    "checkin_attention": False,
    "last_modified": "2019-11-30T17:32:16.739255Z",
    "payments": [
        {
            "local_id": 1,
            "state": "created",
            "amount": "3000.00",
            "created": "2019-11-30T17:32:16.721375Z",
            "payment_date": None,
            "provider": "banktransfer",
            "payment_url": "https://payment-url/",
            "details": {},
        }
    ],
    "refunds": [],
    "require_approval": False,
    "sales_channel": "web",
    "url": "https://fake-order-url/",
}